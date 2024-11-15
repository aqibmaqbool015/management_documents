"use client";
import React, { useState, useEffect } from "react";
import GradientDropdown from "./dropdown";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Sidebar = () => {
  const router = useRouter();

  const [userRole, setUserRole] = useState("superadmin");
  // const [creatureRole, setCreatureRole] = useState('creature');
  const [isProjectsOpen, setIsProjectsOpen] = useState(true);
  const [isEventCreature, setIsEventCreature] = useState(true);
  useEffect(() => {
    const role = localStorage.getItem("userRole") || "superadmin";
    setUserRole(role);
  }, []);
  // users
  const handleClick = () => router.push("/users/dashboard");
  const handleClickShared = () => router.push("/users/events");
  const handleClickTrash = () => router.push("/users/share-me");
  const handleClickDocuments = () => router.push("/users/share-file");

  // admin
  const handleClickAdmin = () => router.push("/admin/dashboard");
  // const handleClickAccount = () => router.push('/login');

  // Event Manager
  const handleClickEvent = () => router.push("/event-manager/dashboard");
  const handleClickEventShared = () => router.push("/event-manager/events");
  const handleClickEventTrash = () => router.push("/event-manager/share-me");
  const handleClickEventDocuments = () =>
    router.push("/event-manager/share-file");

  const image = {
    logo: "/event-logo.svg",
    arrow: "/arrow-right.svg",
    project: "/projects.svg",
    overview: "/overview.svg",
    corporate: "/corporate.svg",
    account: "/account.svg",
    files: "/files.svg",
  };

  const renderUserSidebar = () => (
    <ul>
      <label className="text-customText text-[17px] font-normal capitalize mb-2 block">
        dashboards
      </label>
      <li
        onClick={handleClick}
        className="mb-3 font-semibold text-customBlackC1 text-left hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer px-4 py-3 rounded-[12px]"
      >
        <Image
          src={image.overview}
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
        className="mb-3 text-customBlackC1 text-[17px] font-medium cursor-pointer"
        onClick={() => setIsProjectsOpen(!isProjectsOpen)}
      >
        <span
          className={`mr-2 inline-block transform transition-transform duration-300 ${
            isProjectsOpen ? "rotate-90" : "rotate-0"
          }`}
        >
          <Image
            src={image.arrow}
            alt=""
            className="w-[13px] h-[13px] object-contain inline-block align-baseline"
            width={13}
            height={13}
          />
        </span>
        <Image
          src={image.project}
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
            className="mb-2 text-customBlackC1 text-[15px] font-normal px-4 py-3 rounded-[12px] hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer"
            onClick={handleClickShared}
          >
            All Events
          </li>
          <li
            className="mb-2 text-customBlackC1 text-[15px] font-normal px-4 py-3 rounded-[12px] hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer"
            onClick={handleClickDocuments}
          >
            Shared to me
          </li>
          <li
            className="mb-2 text-customBlackC1 text-[15px] font-normal px-4 py-3 rounded-[12px] hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer"
            onClick={handleClickTrash}
          >
            Shared by me
          </li>
        </ul>
      )}
    </ul>
  );

  const renderAdminSidebar = () => (
    <ul>
      <label className="text-customText text-[17px] font-normal capitalize mb-2 block">
        dashboards
      </label>
      <li
        onClick={handleClickAdmin}
        className="mb-3 font-semibold text-customBlackC1 text-left hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer px-4 py-3 rounded-[12px]"
      >
        <Image
          src={image.overview}
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
        className="mb-3 text-customBlackC1 text-[17px] font-medium cursor-pointer"
        onClick={() => setIsEventCreature(!isEventCreature)}
      >
        <span
          className={`mr-2 inline-block transform transition-transform duration-300 ${
            isEventCreature ? "rotate-90" : "rotate-0"
          }`}
        >
          <Image
            src={image.arrow}
            alt=""
            className="w-[13px] h-[13px] object-contain inline-block align-baseline"
            width={13}
            height={13}
          />
        </span>
        <Image
          src={image.project}
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
            className="mb-2 text-customBlackC1 text-[15px] font-normal px-4 py-3 rounded-[12px] hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer"
            onClick={handleClickShared}
          >
            All Events
          </li>
          <li
            className="mb-2 text-customBlackC1 text-[15px] font-normal px-4 py-3 rounded-[12px] hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer"
            onClick={handleClickDocuments}
          >
            Shared to me
          </li>
          <li
            className="mb-2 text-customBlackC1 text-[15px] font-normal px-4 py-3 rounded-[12px] hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer"
            onClick={handleClickTrash}
          >
            Shared by me
          </li>
        </ul>
      )}
    </ul>
  );

  const renderEventCreaterSidebar = () => (
    <ul>
      <label className="text-customText text-[17px] font-normal capitalize mb-2 block">
        dashboards
      </label>
      <li
        onClick={handleClickEvent}
        className="mb-3 font-semibold text-customBlackC1 text-left hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer px-4 py-3 rounded-[12px]"
      >
        <Image
          src={image.overview}
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
        className="mb-3 text-customBlackC1 text-[17px] font-medium cursor-pointer"
        onClick={() => setIsProjectsOpen(!isProjectsOpen)}
      >
        <span
          className={`mr-2 inline-block transform transition-transform duration-300 ${
            isProjectsOpen ? "rotate-90" : "rotate-0"
          }`}
        >
          <Image
            src={image.arrow}
            alt=""
            className="w-[13px] h-[13px] object-contain inline-block align-baseline"
            width={13}
            height={13}
          />
        </span>
        <Image
          src={image.project}
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
            className="mb-2 text-customBlackC1 text-[15px] font-normal px-4 py-3 rounded-[12px] hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer"
            onClick={handleClickEventShared}
          >
            All Events
          </li>
          <li
            className="mb-2 text-customBlackC1 text-[15px] font-normal px-4 py-3 rounded-[12px] hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer"
            onClick={handleClickEventDocuments}
          >
            Shared to me
          </li>
          <li
            className="mb-2 text-customBlackC1 text-[15px] font-normal px-4 py-3 rounded-[12px] hover:bg-customGraySelect focus:bg-customGraySelect cursor-pointer"
            onClick={handleClickEventTrash}
          >
            Shared by me
          </li>
        </ul>
      )}
    </ul>
  );

  const renderSidebarContent = () => {
    switch (userRole) {
      case "admin":
        return renderAdminSidebar();
      case "superadmin":
        return renderEventCreaterSidebar();
      default:
        return renderUserSidebar();
    }
  };

  return (
    <div className="md:w-64 bg-white p-6 border-r border-r-custom h-full">
      <div className="text-center">
        <Image
          src={image.logo}
          alt=""
          className="w-[120px] h-auto object-contain inline-block cursor-pointer"
          width={120}
          height={70}
        />
      </div>
      <div className="bg-customGraySelect rounded-[12px] text-center my-4 py-1">
        <GradientDropdown
          options={["Upload Files", "Upload Folder", "Upload Image"]}
          images={image.files}
        />
      </div>
      {renderSidebarContent()}
    </div>
  );
};

export default Sidebar;
