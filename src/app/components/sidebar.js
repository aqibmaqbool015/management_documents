"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { imageSidebar } from "../utils/images";

const Sidebar = () => {
  const router = useRouter();
  const [userRole, setUserRole] = useState("userRole");
  const [isProjectsOpen, setIsProjectsOpen] = useState(true);
  const [isEventCreature, setIsEventCreature] = useState(true);
  const [eventSite, setEventSite] = useState(true);
  const [companyContacts, setCompanyContacts] = useState(true);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const handleModalOpen = () => setIsDeleteModal(true);
  const handleModalClose = () => setIsDeleteModal(false);

  useEffect(() => {
    const role = localStorage.getItem("admin") || "admin";
    setUserRole(role);
  }, []);

  // users
  const handleClick = () => router.push("/users/dashboard");
  const handleClickMessage = () => router.push("/messages");
  const handleClickShared = () => router.push("/users/events/birthday");
  const handleClickTrash = () => router.push("/users/share-me");
  const handleClickDocuments = () => router.push("/users/share-file");

  // admin
  const handleClickAdmin = () => router.push("/admin/dashboard");
  const handleClickRequest = () => router.push("/admin/event-site/requests");
  const handleClickPending = () => router.push("/admin/event-site/pending");
  const handleClickCompleted = () => router.push("/admin/event-site/completed");
  const handleClickEventAdmin = () => router.push("/admin/event-create");
  const handleClickAllCreators = () => router.push("/admin/all-event-creators");
  const handleClickEventCategory = () => router.push("/admin/category");
  const handleClickAllEventAdmin = () =>
    router.push("/admin/events/all-events");
  const handleClickevents = () => router.push("/admin/events/birthday");
  const handleClickContacts = () => router.push("/admin/contacts");

  // Event Manager
  const handleClickEvent = () => router.push("/event-manager/dashboard");
  const handleClickAllEvent = () => router.push("/event-manager/all-events");
  const handleClickEventBy = () =>
    router.push("/event-manager/events/contact-by-me");
  const handleClickEventDocuments = () =>
    router.push("/event-manager/events/contact-to-me");
  const handleClickCreateEvent = () =>
    router.push("/event-manager/create-event");
  const handleClickCategory = () => router.push("/event-manager/category");

  const renderUserSidebar = () => (
    <ul>
      <label className="text-customText text-[17px] font-normal capitalize mb-2 block">
        dashboards
      </label>
      <li
        onClick={handleClick}
        className="mb-3 font-normal text-customBlackC1 text-left hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer px-4 py-2 rounded-[12px]"
      >
        <Image
          src={imageSidebar.overview}
          alt=""
          className="w-[20px] h-[20px] object-contain inline-block align-sub mr-3"
          width={20}
          height={20}
        />
        Overview
      </li>
      <label className="text-customText text-[17px] font-normal capitalize mb-2 block">
        pages
      </label>
      <li
        className="mb-3 text-customBlackC1 text-[17px] font-normal cursor-pointer"
        onClick={() => setIsProjectsOpen(!isProjectsOpen)}
      >
        <span
          className={`mr-2 inline-block transform transition-transform duration-300 ${
            isProjectsOpen ? "rotate-90" : "rotate-0"
          }`}
        >
          <Image
            src={imageSidebar.arrow}
            alt=""
            className="w-[13px] h-[13px] object-contain inline-block align-baseline"
            width={13}
            height={13}
          />
        </span>
        <Image
          src={imageSidebar.project}
          alt=""
          className="w-[20px] h-[20px] object-contain inline-block align-text-bottom mr-2"
          width={20}
          height={20}
        />
        Events
      </li>
      {isProjectsOpen && (
        <ul className="pl-4 mb-3">
          <li
            className="mb-2 text-customBlackC1 text-[14px] font-normal px-4 py-2 rounded-[12px] hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer"
            onClick={handleClickShared}
          >
            All Events
          </li>
          <li
            className="mb-2 text-customBlackC1 text-[14px] font-normal px-4 py-2 rounded-[12px] hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer"
            onClick={handleClickDocuments}
          >
            Shared to me
          </li>
          <li
            className="mb-2 text-customBlackC1 text-[14px] font-normal px-4 py-2 rounded-[12px] hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer"
            onClick={handleClickTrash}
          >
            Shared by me
          </li>
        </ul>
      )}
      <li
        onClick={handleClickMessage}
        className="mb-3 font-normal text-customBlackC1 text-left hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer px-4 py-2 rounded-[12px]"
      >
        <Image
          src={imageSidebar.message}
          alt=""
          className="w-[20px] h-[20px] object-contain inline-block align-sub mr-3"
          width={20}
          height={20}
        />
        Messages
      </li>
    </ul>
  );

  const renderAdminSidebar = () => (
    <ul>
      <label className="text-customText text-[17px] font-normal capitalize mb-2 block">
        dashboards
      </label>
      <li
        onClick={handleClickAdmin}
        className="mb-3 font-normal text-customBlackC1 text-left hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer px-4 py-2 rounded-[12px]"
      >
        <Image
          src={imageSidebar.overview}
          alt=""
          className="w-[20px] h-[20px] object-contain inline-block align-sub mr-3"
          width={20}
          height={20}
        />
        Overview
      </li>
      <label className="text-customText text-[17px] font-normal capitalize mb-2 block">
        pages
      </label>
      {/* <li
        className="mb-3 font-normal text-customBlackC1 text-left hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer px-4 py-2 rounded-[12px]"
        onClick={handleClickEventCategory}
      >
        <Image
          src={imageSidebar.category}
          alt=""
          className="w-[20px] h-[20px] object-contain inline-block align-sub mr-3"
          width={20}
          height={20}
        />
        Category
      </li> */}
      <li
        className="mb-3 text-customBlackC1 text-[17px] font-normal cursor-pointer"
        onClick={() => setIsEventCreature(!isEventCreature)}
      >
        <span
          className={`mr-2 inline-block transform transition-transform duration-300 ${
            isEventCreature ? "rotate-90" : "rotate-0"
          }`}
        >
          <Image
            src={imageSidebar.arrow}
            alt=""
            className="w-[13px] h-[13px] object-contain inline-block align-baseline"
            width={13}
            height={13}
          />
        </span>
        <Image
          src={imageSidebar.project}
          alt=""
          className="w-[20px] h-[20px] object-contain inline-block align-text-bottom mr-2"
          width={20}
          height={20}
        />
        Events
      </li>
      {isEventCreature && (
        <ul className="pl-4 mb-3">
          <li
            className="mb-2 text-customBlackC1 text-[14px] font-normal px-4 py-2 rounded-[12px] hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer"
            onClick={handleClickAllEventAdmin}
          >
            All Events
          </li>
          <li
            className="mb-2 text-customBlackC1 text-[14px] font-normal px-4 py-2 rounded-[12px] hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer"
            onClick={handleClickevents}
          >
            Birthday Events
          </li>
          <li
            className="mb-2 text-customBlackC1 text-[14px] font-normal px-4 py-2 rounded-[12px] hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer"
            onClick={handleClickevents}
          >
            Wedding Events
          </li>
        </ul>
      )}
      <li
        className="mb-3 font-normal text-customBlackC1 text-left hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer px-4 py-2 rounded-[12px]"
        onClick={handleClickContacts}
      >
        <Image
          src={imageSidebar.contact}
          alt=""
          className="w-[20px] h-[20px] object-contain inline-block align-sub mr-3"
          width={20}
          height={20}
        />
        Contacts
      </li>
      <li
        className="mb-3 font-normal text-customBlackC1 text-left hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer px-4 py-2 rounded-[12px]"
        onClick={handleClickAllCreators}
      >
        <Image
          src={imageSidebar.contactEvent}
          alt=""
          className="w-[20px] h-[20px] object-contain inline-block align-sub mr-3"
          width={20}
          height={20}
        />
        All Event Creators
      </li>
      <li
        className="mb-3 text-customBlackC1 text-[17px] font-normal cursor-pointer"
        onClick={() => setEventSite(!eventSite)}
      >
        <span
          className={`mr-2 inline-block transform transition-transform duration-300 ${
            eventSite ? "rotate-90" : "rotate-0"
          }`}
        >
          <Image
            src={imageSidebar.arrow}
            alt=""
            className="w-[13px] h-[13px] object-contain inline-block align-baseline"
            width={13}
            height={13}
          />
        </span>
        <Image
          src={imageSidebar.event}
          alt=""
          className="w-[20px] h-[20px] object-contain inline-block align-text-bottom mr-2"
          width={20}
          height={20}
        />
        Create Event Site
      </li>
      {eventSite && (
        <ul className="pl-4 mb-3">
          {/* <li
            className="mb-2 text-customBlackC1 text-[14px] font-normal px-4 py-2 rounded-[12px] hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer"
            onClick={handleClickEventAdmin}
          >
            Site Created
          </li> */}
          <li
            className="mb-2 text-customBlackC1 text-[14px] font-normal px-4 py-2 rounded-[12px] hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer"
            onClick={handleClickRequest}
          >
            Requests Received
          </li>
          <li
            className="mb-2 text-customBlackC1 text-[14px] font-normal px-4 py-2 rounded-[12px] hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer"
            onClick={handleClickPending}
          >
            Pending Sites
          </li>
          <li
            className="mb-2 text-customBlackC1 text-[14px] font-normal px-4 py-2 rounded-[12px] hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer"
            onClick={handleClickCompleted}
          >
            Completed Sites
          </li>
        </ul>
      )}
      <li
        className="mb-3 text-customBlackC1 text-[17px] font-normal cursor-pointer"
        onClick={() => setCompanyContacts(!companyContacts)}
      >
        <span
          className={`mr-2 inline-block transform transition-transform duration-300 ${
            companyContacts ? "rotate-90" : "rotate-0"
          }`}
        >
          <Image
            src={imageSidebar.arrow}
            alt=""
            className="w-[13px] h-[13px] object-contain inline-block align-baseline"
            width={13}
            height={13}
          />
        </span>
        <Image
          src={imageSidebar.contactEvent}
          alt=""
          className="w-[20px] h-[20px] object-contain inline-block align-text-bottom mr-2"
          width={20}
          height={20}
        />
        Company Contacts
      </li>
      {isEventCreature && (
        <ul className="pl-4 mb-3">
          <li className="mb-2 text-customBlackC1 text-[14px] font-normal px-4 py-2 rounded-[12px] hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer">
            Company Contact
          </li>
          <li className="mb-2 text-customBlackC1 text-[14px] font-normal px-4 py-2 rounded-[12px] hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer">
            Company Group Contact
          </li>
        </ul>
      )}
      <li
        onClick={handleClickMessage}
        className="mb-3 font-normal text-customBlackC1 text-left hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer px-4 py-2 rounded-[12px]"
      >
        <Image
          src={imageSidebar.message}
          alt=""
          className="w-[20px] h-[20px] object-contain inline-block align-sub mr-3"
          width={20}
          height={20}
        />
        Messages
      </li>
      <li
        onClick={handleModalOpen}
        className="mb-3 font-normal text-customBlackC1 text-left hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer px-4 py-2 rounded-[12px]"
      >
        <Image
          src={imageSidebar.trash}
          alt=""
          className="w-[20px] h-[20px] object-contain inline-block align-sub mr-3"
          width={20}
          height={20}
        />
        Trash
      </li>
    </ul>
  );

  const renderEventCreaterSidebar = () => (
    <ul>
      <label className="text-customText text-[17px] font-normal capitalize mb-2 block">
        dashboards
      </label>
      <li
        onClick={handleClickEvent}
        className="mb-3 font-normal text-customBlackC1 text-left hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer px-4 py-2 rounded-[12px]"
      >
        <Image
          src={imageSidebar.overview}
          alt=""
          className="w-[20px] h-[20px] object-contain inline-block align-sub mr-3"
          width={20}
          height={20}
        />
        Overview
      </li>
      <li
        onClick={handleClickAllEvent}
        className="mb-3 font-normal text-customBlackC1 text-left hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer px-4 py-2 rounded-[12px]"
      >
        <Image
          src={imageSidebar.date}
          alt=""
          className="w-[20px] h-[20px] object-contain inline-block align-sub mr-3"
          width={20}
          height={20}
        />
        All Events
      </li>

      <label className="text-customText text-[17px] font-normal capitalize mb-2 block">
        pages
      </label>
      <li
        onClick={handleClickCategory}
        className="mb-3 font-normal text-customBlackC1 text-left hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer px-4 py-2 rounded-[12px]"
      >
        <Image
          src={imageSidebar.category}
          alt=""
          className="w-[20px] h-[20px] object-contain inline-block align-sub mr-3"
          width={20}
          height={20}
        />
        Category
      </li>
      <li
        className="mb-3 text-customBlackC1 text-[17px] font-normal cursor-pointer"
        onClick={() => setIsProjectsOpen(!isProjectsOpen)}
      >
        <span
          className={`mr-2 inline-block transform transition-transform duration-300 ${
            isProjectsOpen ? "rotate-90" : "rotate-0"
          }`}
        >
          <Image
            src={imageSidebar.arrow}
            alt=""
            className="w-[13px] h-[13px] object-contain inline-block align-baseline"
            width={13}
            height={13}
          />
        </span>
        <Image
          src={imageSidebar.project}
          alt=""
          className="w-[20px] h-[20px] object-contain inline-block align-text-bottom mr-2"
          width={20}
          height={20}
        />
        Birthday Events
      </li>
      {isProjectsOpen && (
        <ul className="pl-4 mb-3">
          <li
            className="mb-2 text-customBlackC1 text-[14px] font-normal px-4 py-2 rounded-[12px] hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer"
            onClick={handleClickAllEvent}
          >
            All Events
          </li>
          <li
            className="mb-2 text-customBlackC1 text-[14px] font-normal px-4 py-2 rounded-[12px] hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer"
            onClick={handleClickCreateEvent}
          >
            Create New Event
          </li>
          <li
            className="mb-2 text-customBlackC1 text-[14px] font-normal px-4 py-2 rounded-[12px] hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer"
            onClick={handleClickEventDocuments}
          >
            Contact to me
          </li>
          <li
            className="mb-2 text-customBlackC1 text-[14px] font-normal px-4 py-2 rounded-[12px] hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer"
            onClick={handleClickEventBy}
          >
            Contact by me
          </li>
        </ul>
      )}
      <li
        onClick={handleClickMessage}
        className="mb-3 font-normal text-customBlackC1 text-left hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer px-4 py-2 rounded-[12px]"
      >
        <Image
          src={imageSidebar.message}
          alt=""
          className="w-[20px] h-[20px] object-contain inline-block align-sub mr-3"
          width={20}
          height={20}
        />
        Messages
      </li>
      <li
        onClick={handleModalOpen}
        className="mb-3 font-normal text-customBlackC1 text-left hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer px-4 py-2 rounded-[12px]"
      >
        <Image
          src={imageSidebar.trash}
          alt=""
          className="w-[20px] h-[20px] object-contain inline-block align-sub mr-3"
          width={20}
          height={20}
        />
        Trash
      </li>
    </ul>
  );

  const renderSidebarContent = () => {
    switch (userRole) {
      case "admin":
        return renderAdminSidebar();
      case "manager":
        return renderEventCreaterSidebar();
      default:
        return renderUserSidebar();
    }
  };

  return (
    <div className="md:w-64 bg-white p-6 border-r border-r-cus` tom h-full">
      <div className="text-center">
        <Image
          src={imageSidebar.logo}
          alt=""
          className="w-[120px] h-auto object-contain inline-block cursor-pointer"
          width={120}
          height={70}
        />
      </div>
      {/* <div className="bg-customGraySelect rounded-[12px] text-center my-4 py-1">
        <GradientDropdown
          options={["Upload Files", "Upload Folder", "Upload Image"]}
          images={image.files}
        />
      </div> */}
      {renderSidebarContent()}

      {isDeleteModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-1/2 md:w-[400px] max-h-[90vh] overflow-y-auto">
            <div className="p-4 relative">
              <div className="absolute right-3 top-4">
                <Image
                  src={imageSidebar.cross}
                  alt="Close"
                  className="w-[20px] h-auto cursor-pointer"
                  onClick={handleModalClose}
                  width={15}
                  height={15}
                />
              </div>
            </div>
            <div className="my-4 px-4">
              <p className="text-[15px] text-customBlackLight text-center ">
                Do you really want to trash your account.
              </p>
              <div className="my-3 text-center">
                <span
                  onClick={handleModalClose}
                  className="text-customBlue inline-block capitalize mx-2 bg-transparent border border-customBlue rounded-[20px] px-3 min-w-[100px] py-1
                  cursor-pointer "
                >
                  cancel
                </span>
                <button className="text-white capitalize mx-2 bg-customRed border border-transparent rounded-[20px] px-3 min-w-[100px] py-1 ">
                  trash
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
