"use client";

import React, { useState, useRef, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Select from "react-select";
import { signOut, useSession } from "next-auth/react";
import { LoadingOutlined } from "@ant-design/icons";
import toast from "react-hot-toast";
import Input from "@/shared/Input";
import { states } from "@/shared/province";
import { education, universities } from "@/shared/education";
import PDFViewer from "@/shared/upload";
import Datepicker from "@/shared/datePicker";

function Profile_Setup() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const email = session?.user?.email;
  const [zipCode, setZipcode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [FormData, setFormData] = useState({
    firstnamee: "",
    lastname: "",
    address: "",
    city: "",
  });
  const [selectedState, setSelectedState] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [enddate, setEndDate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [componentMount, setComponentMount] = useState({
    registrationMount: true,
    walletLinkMount: false,
    faceRecognitionMount: false,
  });
  const [selecteded, setSelectedEd] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedCollege, setSelectedCollege] = useState(null);
  const firstnameRef = useRef(null);
  const lastnameRef = useRef(null);
  const addressRef = useRef(null);
  const cityRef = useRef(null);
  const zipCodeRef = useRef(null);
  const phoneNumberRef = useRef(null);

  const handleBeforeUnload = (event) => {
    event.preventDefault();
    event.returnValue =
      "Are you sure you want to leave? Your data will be lost.";
  };

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const options = states.map((state) => ({
    label: state.label,
    value: state.value,
  }));

  const filteredOptions = selectedState
    ? states.find((state) => state.value === selectedState.value)?.districts ||
      []
    : [];

  const edopt = education.map((ed) => ({
    label: ed.label,
    value: ed.value,
  }));

  const filterededopt = selecteded
    ? education.find((ed) => ed.value === selecteded.value)?.courses || []
    : [];

  const universityopt = universities.map((college) => ({
    label: college.label,
    value: college.value,
  }));

  const changeZipcode = (event) => {
    const inputValue = event.target.value;
    const regex = /^[0-9]{0,6}$/;
    if (regex.test(inputValue)) {
      setZipcode(inputValue);
    }
  };

  const changeNumber = (event) => {
    const inputValue = event.target.value;
    const regex = /^[0-9]{0,10}$/;
    if (regex.test(inputValue)) {
      setPhoneNumber(inputValue);
    }
  };

  const handleChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { address, city, firstname, lastname } = FormData;
      const state = selectedState?.label;
      const district = selectedDistrict?.label;
      const email = session?.user.email;
      console.log("ok");
      if (
        !address ||
        !city ||
        !firstname ||
        !lastname ||
        !state ||
        !district ||
        !zipCode ||
        !phoneNumber ||
        !selectedDate ||
        !session
      ) {
        toast.error("Please Fill All the fields", { icon: "🚫" });
        setIsLoading(false);
        return;
      }
      const response = await fetch("/api/complete/phaseone", {
        cache: "no-store",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          firstname,
          lastname,
          address,
          city,
          state,
          district,
          zipCode,
          phoneNumber,
          selectedDate,
        }),
      });
      const data = await response.json();
      const ok = data?.message === "ok";
      if (ok) {
        setIsLoading(false);
        setComponentMount({
          registrationMount: false,
          walletLinkMount: true,
          faceRecognitionMount: false,
        });
      } else {
        setIsLoading(false);
        toast.error("Registration Failed", { icon: "🚫" });
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("Registration failed. Please Try again", { icon: "🚫" });
      console.log(error);
    }
  };

  const secondphase = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const qualification = selecteded?.label;
      const course = selectedCourse?.label;
      const college = selectedCollege?.label;
      if (
        !qualification ||
        !startDate ||
        !enddate ||
        !course ||
        !college ||
        !session
      ) {
        toast.error("Please Fill All the fields", { icon: "🚫" });
        setIsLoading(false);
        return;
      }
      const response = await fetch("/api/complete/phasetwo", {
        cache: "no-store",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          qualification,
          course,
          college,
          startDate,
          enddate,
        }),
      });
      const data = await response.json();
      const ok = data?.message === "ok";

      if (ok) {
        setIsLoading(false);
        setComponentMount({
          registrationMount: false,
          walletLinkMount: false,
          faceRecognitionMount: true,
        });
      } else {
        setIsLoading(false);
        toast.error("Registration Failed", { icon: "🚫" });
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("Registration failed. Please Try again", { icon: "🚫" });
      console.log(error);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-[#e5e7eb] relative overflow-hidden">
        <div className="w-full flex justify-center items-center">
          <div className="mx-auto px-3 lg:px-10 rounded-2xl fixed top-2 md:top-8  shadow-md w-full md:w-5/6 z-50 bg-white flex justify-between py-4 items-center">
            <div className="flex">
              <p
                onClick={() => router.push("/")}
                className="text-2xl text-black font-bricolage font-medium cursor-pointer"
              >
                Superio
              </p>
            </div>
            <div className="flex justify-between gap-6">
              <p className="hidden lg:flex text-[#a3a3a3] hover:text-[#f5f5f5] text-sm font-normal font-bricolage px-2 cursor-pointer"></p>
              <p
                onClick={() => signOut({ callbackUrl: "/" })}
                className="text-black text-sm font-normal font-bricolage px-2 cursor-pointer"
              >
                Logout
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center w-full">
          <div className="flex pt-24 lg:pt-36 justify-between items-center w-2/3">
            <button
              className={`bg-blue-500 ${componentMount.registrationMount == false && "bg-opacity-50  cursor-not-allowed"} text-white font-bold py-1 px-3 rounded-full`}
            >
              1
            </button>
            <div className="flex border-t border-b border-blue-500 h-0 w-full"></div>
            <button
              className={`bg-blue-500 ${componentMount.registrationMount == false && componentMount.walletLinkMount == false && "bg-opacity-60 cursor-not-allowed"} text-white font-bold py-1 px-3 rounded-full`}
            >
              2
            </button>
            <div className="flex border-t border-b border-blue-500 h-0 w-full"></div>
            <button
              className={`bg-blue-500 text-white font-bold py-1 px-3 rounded-full`}
            >
              3
            </button>
          </div>
        </div>

        {componentMount.registrationMount == true &&
          componentMount.walletLinkMount == false &&
          componentMount.faceRecognitionMount == false && (
            <div className="pt-10 p-4 flex items-center justify-center">
              <div className="container max-w-screen-lg mx-auto">
                <div>
                  <h2 className="font-semibold text-xl text-black">
                    Registration
                  </h2>
                  <p className="text-black mb-6">
                    Enter your personal informations.
                  </p>

                  <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                      <div className="text-black">
                        <p className="font-medium text-lg">Personal Details</p>
                        <p>Please fill out all the fields.</p>
                      </div>

                      <div className="lg:col-span-2">
                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                          <div className="md:col-span-5 lg:flex justify-start gap-10">
                            <div className="flex flex-col">
                              <label className="text-black" htmlFor="full_name">
                                First name
                              </label>
                              <Input
                                type="text"
                                ref={firstnameRef}
                                name="firstname"
                                onChange={(e) => handleChange(e, "firstname")}
                                id="firstname"
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 outline-none"
                              />
                            </div>
                            <div className="flex flex-col">
                              <label className="text-black" htmlFor="full_name">
                                LastName
                              </label>
                              <Input
                                type="text"
                                ref={lastnameRef}
                                name="lastname"
                                onChange={(e) => handleChange(e, "lastname")}
                                id="lastname"
                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 outline-none"
                              />
                            </div>
                          </div>
                          <div className="md:col-span-5 py-4">
                            <Datepicker
                              selectedDate={selectedDate}
                              setSelectedDate={setSelectedDate}
                              label={"Date of Birth: "}
                            />
                          </div>
                          <div className="md:col-span-5">
                            <label className="text-black" htmlFor="voterId">
                              Phone Number
                            </label>
                            <Input
                              type="tel"
                              name="phone"
                              id="phone"
                              value={phoneNumber}
                              ref={phoneNumberRef}
                              onChange={changeNumber}
                              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 outline-none uppercase"
                              placeholder="phone number"
                            />
                          </div>

                          <div className="md:col-span-2">
                            <label className="text-black" htmlFor="country">
                              State / region
                            </label>
                            <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                              <Select
                                className="appearance-none outline-none text-gray-800 w-full bg-transparent"
                                options={options}
                                value={selectedState}
                                onChange={(selectedOption) => {
                                  setSelectedState(selectedOption);
                                  setSelectedDistrict(null);
                                }}
                              />
                            </div>
                          </div>

                          <div className="md:col-span-2">
                            <label className="text-black" htmlFor="state">
                              District
                            </label>
                            <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                              <Select
                                className="appearance-none outline-none text-gray-800 w-full bg-transparent"
                                options={filteredOptions}
                                value={selectedDistrict}
                                onChange={(selectedOption) =>
                                  setSelectedDistrict(selectedOption)
                                }
                              />
                            </div>
                          </div>

                          <div className="md:col-span-1">
                            <label className="text-black" htmlFor="zipcode">
                              Zipcode
                            </label>
                            <Input
                              type="text"
                              ref={zipCodeRef}
                              name="zipcode"
                              id="zipcode"
                              value={zipCode}
                              onChange={changeZipcode}
                              className="outline-none transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                              placeholder=""
                            />
                          </div>

                          <div className="md:col-span-3">
                            <label className="text-black" htmlFor="address">
                              Address / Street
                            </label>
                            <Input
                              type="text"
                              ref={addressRef}
                              name="address"
                              id="address"
                              onChange={(e) => handleChange(e, "address")}
                              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 outline-none"
                              placeholder=""
                            />
                          </div>

                          <div className="md:col-span-2">
                            <label className="text-black" htmlFor="city">
                              City
                            </label>
                            <Input
                              type="text"
                              ref={cityRef}
                              name="city"
                              id="city"
                              onChange={(e) => handleChange(e, "city")}
                              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 outline-none"
                              placeholder=""
                            />
                          </div>

                          <div className="md:col-span-5 text-right pt-5">
                            <div className="inline-flex items-end">
                              <button
                                disabled={isLoading}
                                onClick={handleSubmit}
                                className="bg-blue-500 box-shadow text-white font-bold py-2 px-4 rounded"
                              >
                                {isLoading ? <LoadingOutlined /> : "Submit"}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        {componentMount.registrationMount == false &&
          componentMount.walletLinkMount == true &&
          componentMount.faceRecognitionMount == false && (
            <div className="pt-10 p-4 flex items-center justify-center">
              <div className="container max-w-screen-lg mx-auto">
                <div>
                  <h2 className="font-semibold text-xl text-black">
                    Education
                  </h2>
                  <p className="text-black mb-6">Add Educational details.</p>

                  <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                      <div className="text-black">
                        <p className="font-medium text-lg">Education</p>
                        <p>Add Most relevent educational details</p>
                      </div>

                      <div className="lg:col-span-2">
                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                          <div className="md:col-span-5">
                            <div className="md:col-span-2">
                              <label className="text-black" htmlFor="country">
                                Highest level of education
                              </label>
                              <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                <Select
                                  className="appearance-none outline-none text-gray-800 w-full bg-transparent"
                                  options={edopt}
                                  value={selecteded}
                                  onChange={(selecteded) => {
                                    setSelectedEd(selecteded);
                                    setSelectedCourse(null);
                                  }}
                                />
                              </div>
                            </div>

                            <div className="md:col-span-2">
                              <label className="text-black" htmlFor="state">
                                Courses
                              </label>
                              <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                <Select
                                  className="appearance-none outline-none text-gray-800 w-full bg-transparent"
                                  options={filterededopt}
                                  value={selectedCourse}
                                  onChange={(selectedOption) =>
                                    setSelectedCourse(selectedOption)
                                  }
                                />
                              </div>
                            </div>
                            <div className="md:col-span-2">
                              <label className="text-black" htmlFor="state">
                                University / College
                              </label>
                              <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                <Select
                                  className="appearance-none outline-none text-gray-800 w-full bg-transparent"
                                  options={universityopt}
                                  value={selectedCollege}
                                  onChange={(selectedOption) =>
                                    setSelectedCollege(selectedOption)
                                  }
                                />
                              </div>
                            </div>
                            <div className="md:col-span-5 py-4 lg:flex gap-4">
                              <Datepicker
                                selectedDate={startDate}
                                setSelectedDate={setStartDate}
                                label={"Start date: "}
                              />
                              <Datepicker
                                selectedDate={enddate}
                                setSelectedDate={setEndDate}
                                label={"End date: "}
                              />
                            </div>
                          </div>

                          <div className="md:col-span-5 text-right pt-5">
                            <div className="inline-flex items-end">
                              <button
                                onClick={secondphase}
                                disabled={isLoading}
                                className="bg-blue-500 box-shadow text-white font-bold py-2 px-4 rounded"
                              >
                                {isLoading ? <LoadingOutlined /> : "continue"}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        {componentMount.registrationMount == false &&
          componentMount.walletLinkMount == false &&
          componentMount.faceRecognitionMount == true && (
            <div className="pt-10 p-4 flex items-center justify-center">
              <div className="container max-w-screen-lg mx-auto">
                <div>
                  <h2 className="font-semibold text-xl text-black">
                    Upload Resume
                  </h2>
                  <p className="text-black mb-6">Upload your resume.</p>

                  <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                      <div className="text-black">
                        <p className="font-medium text-lg">Resume</p>
                        <p>Please upload the most recent resume.</p>
                      </div>

                      <div className="lg:col-span-2 min-h-[40vh] flex flex-col gap-10 justify-center items-center">
                        <PDFViewer
                          selectedFile={selectedFile}
                          setSelectedFile={setSelectedFile}
                        />
                        <button
                          disabled={isLoading}
                          onClick={() => {
                            router.push("/account/feed");
                          }}
                          className="bg-blue-500 box-shadow text-white font-bold py-2 px-4 rounded"
                        >
                          {isLoading ? <LoadingOutlined /> : "upload"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
      </div>
    </>
  );
}

export default Profile_Setup;
