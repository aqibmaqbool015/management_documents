const image = {
  image: "/signup2.png",
  logo: "/logo.svg",
  mail: "/mail.svg",
  key: "/key.svg",
  user: "/user.svg",
  phone: "/phone.svg",
};

export const contact = [
  {
    image: "/contact1.svg",
    title: "Call",
  },
  {
    image: "/contact2.svg",
    title: "Message",
  },
  {
    image: "/contact3.svg",
    title: "Whatsapp",
  },
  {
    image: "/contact4.svg",
    title: "Make Deal",
  },
];

export const contactList = [
  {
    image: "/contact1.svg",
    title: "Call",
  },
  {
    image: "/contact2.svg",
    title: "Message",
  },
  {
    image: "/contact3.svg",
    title: "Whatsapp",
  },
];

export const products = [
  {
    image: "/instrument1.svg",
    title: "Estate",
  },
  {
    image: "/instrument1.svg",
    title: "2146 Liter",
  },
  {
    image: "/instrument2.svg",
    title: "Manual",
  },
  {
    image: "/instrument3.svg",
    title: "5 Doors",
  },
  {
    image: "/instrument4.svg",
    title: "5 Seats",
  },
  {
    image: "/instrument5.svg",
    title: "Diesel",
  },
];

export const auto = [
  {
    title: "Vehicle",
    text: "Mercedes X Class",
  },
  {
    title: "Trade",
    text: "£ 7,243",
  },
  {
    title: "Retail Value",
    text: "£ 10,449",
  },
  {
    title: "Part Exchange",
    text: "£ 7,975",
  },
  {
    title: "Private",
    text: "£ 8,005",
  },
];

export const userListing = [
  {
    image: "/user1.png",
    title: " Alex J Read",
    description: " Caru Automotive",
  },
  {
    image: "/user2.png",
    title: "Alex Wood",
    description: " Caru Automotive",
  },
  {
    image: "/user3.png",
    title: " Alexa Grace",
    description: " Caru Automotive",
  },
  {
    image: "/user4.png",
    title: " Alex Potter",
    description: " Caru Automotive",
  },
  {
    image: "/user5.png",
    title: "Alex Flu",
    description: " Caru Automotive",
  },
];

export const userListingDetail = [
  {
    image: "/reviewer.png",
    title: "Jonathan",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, ",
  },
  {
    image: "/reviewer.png",
    title: "David Beckham",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
  },
  {
    image: "/reviewer.png",
    title: "David Beckham",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
  },
];

export const socials = [
  {
    image: "/social.svg",
    title: "google",
  },
  {
    image: "/social2.svg",
    title: "facebook",
  },
  {
    image: "/social3.svg",
    title: "apple",
  },
  {
    image: "/gmail.svg",
    title: "email",
  },
];

export const Button = (props) => {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-[8px] shadow-sm text-sm font-medium text-white bg-gradient-to-r from-customGradiantFrom to-customGradiantTo"
    >
      {props.name}
    </button>
  );
};

export const cards = [
  {
    class: "p-6 bg-customCard1 rounded-lg",
    title: "Total Events",
    count: "1,029",
  },
  {
    class: "p-6 bg-customCard2 rounded-lg",
    title: "Shared to me",
    count: "392",
  },
  {
    class: "p-6 bg-customCard1 rounded-lg",
    title: "Shared by me",
    count: "781",
  },
];

export const cardsAdmin = [
  {
    class: "p-6 bg-customCard1 rounded-lg",
    title: "Total Events",
    count: "1,029",
  },
  {
    class: "p-6 bg-customCard2 rounded-lg",
    title: "Shared by me",
    count: "392",
  },
  {
    class: "p-6 bg-customCard1 rounded-lg",
    title: "Shared to me ",
    count: "781",
  },
  {
    class: "p-6 bg-customCard2 rounded-lg",
    title: "Invited people",
    count: "11,289",
  },
];

export const tableBodyContent = [
  {
    image: "/image.svg",
    name: "Website Design.png",
    date: "Jun,24 2024",
    size: "2.5 Mb",
    modify: "Aug,29 2024",
  },
  {
    image: "/image.svg",
    name: "Website Design.png",
    date: "Jun,24 2024",
    size: "2.5 Mb",
    modify: "Aug,29 2024",
  },
  {
    image: "/image.svg",
    name: "Website Design.png",
    date: "Jun,24 2024",
    size: "2.5 Mb",
    modify: "Aug,29 2024",
  },
  {
    image: "/image.svg",
    name: "Website Design.png",
    date: "Jun,24 2024",
    size: "2.5 Mb",
    modify: "Aug,29 2024",
  },
];

export const imageUser = [
  {
    image: (
      <>
        <img
          src="/share-1.png"
          alt=""
          className="w-[25px] h-[25px] inline-block object-contain mr-[-5px] relative z-10  "
        />
      </>
    ),
  },
  {
    image: (
      <>
        <img
          src="/share-2.png"
          alt=""
          className="w-[25px] h-[25px] inline-block object-contain mr-[-5px] relative z-10  "
        />
      </>
    ),
  },
  {
    image: (
      <>
        <img
          src="/share-3.png"
          alt=""
          className="w-[25px] h-[25px] inline-block object-contain mr-[-5px] relative z-10  "
        />
      </>
    ),
  },
  {
    image: (
      <>
        <img
          src="/share-4.png"
          alt=""
          className="w-[25px] h-[25px] inline-block object-contain mr-[-5px] relative z-10  "
        />
      </>
    ),
  },
  {
    image: (
      <>
        <span className="inline-block text-[10px]  bg-customBgCount rounded-[8px] px-[4px] py-[2.5px] ">
          <p className="bg-clip-text bg-gradient-to-r from-customGradiantFrom to-customGradiantTo text-transparent">
            +12
          </p>
        </span>
      </>
    ),
  },
];
export const tableBodyTrash = [
  {
    image: "/image.svg",
    name: "Website Design.png",
    date: "Jun,24 2024",
    size: "2.5 Mb",
    modify: (
      <>
        <button className="bg-customBgGreen text-customGreen text-[14px] font-medium capitalize rounded-[10px] text-center px-4 py-2 mx-2">
          restore
        </button>
        <button className="bg-customBgRed text-customRed text-[14px] font-medium capitalize rounded-[10px] text-center px-4 py-2 mx-2">
          delete
        </button>
      </>
    ),
  },
  {
    image: "/image.svg",
    name: "Website Design.png",
    date: "Jun,24 2024",
    size: "2.5 Mb",
    modify: (
      <>
        <button className="bg-customBgGreen text-customGreen text-[14px] font-medium capitalize rounded-[10px] text-center px-4 py-2 mx-2">
          restore
        </button>
        <button className="bg-customBgRed text-customRed text-[14px] font-medium capitalize rounded-[10px] text-center px-4 py-2 mx-2">
          delete
        </button>
      </>
    ),
  },
  {
    image: "/image.svg",
    name: "Website Design.png",
    date: "Jun,24 2024",
    size: "2.5 Mb",
    modify: (
      <>
        <button className="bg-customBgGreen text-customGreen text-[14px] font-medium capitalize rounded-[10px] text-center px-4 py-2 mx-2">
          restore
        </button>
        <button className="bg-customBgRed text-customRed text-[14px] font-medium capitalize rounded-[10px] text-center px-4 py-2 mx-2">
          delete
        </button>
      </>
    ),
  },
  {
    image: "/image.svg",
    name: "Website Design.png",
    date: "Jun,24 2024",
    size: "2.5 Mb",
    modify: (
      <>
        <button className="bg-customBgGreen text-customGreen text-[14px] font-medium capitalize rounded-[10px] text-center px-4 py-2 mx-2">
          restore
        </button>
        <button className="bg-customBgRed text-customRed text-[14px] font-medium capitalize rounded-[10px] text-center px-4 py-2 mx-2">
          delete
        </button>
      </>
    ),
  },
];

export const documentsFile = [
  {
    image: "/pdf-view.png",
    icon: "/pdf.svg",
    title: "PUXI04 - Review Slots",
    dot: "/dot.svg",
    seen: "Last Opened : Today",
  },
  {
    image: "/pdf-view.png",
    icon: "/pdf.svg",
    title: "PUXI04 - Review Slots",
    dot: "/dot.svg",
    seen: "Last Opened : Today",
  },
  {
    image: "/pdf-view.png",
    icon: "/pdf.svg",
    title: "PUXI04 - Review Slots",
    dot: "/dot.svg",
    seen: "Last Opened : Today",
  },
  {
    image: "/pdf-view.png",
    icon: "/pdf.svg",
    title: "PUXI04 - Review Slots",
    dot: "/dot.svg",
    seen: "Last Opened : Today",
  },
  {
    image: "/pdf-view.png",
    icon: "/document.svg",
    title: "PUXI04 - Review Slots",
    dot: "/dot.svg",
    seen: "Last Opened : Today",
  },
  {
    image: "/pdf-view.png",
    icon: "/document.svg",
    title: "PUXI04 - Review Slots",
    dot: "/dot.svg",
    seen: "Last Opened : Today",
  },
];

export const legalName = [
  {
    label: "Full Name",
    type: "text",
    id: "firstName",
    name: "firstName",
    placeholder: "Enter your Full Name",
    labelClass: "text-[17px] text-customBlue font-medium",
    icon: image.user,
  },
  {
    label: "Email",
    type: "email",
    id: "email",
    name: "email",
    placeholder: "username@mail.com",
    labelClass: "text-[17px] text-customBlue font-medium",
    icon: image.mail,
  },
  {
    label: "Phone Number",
    type: "tel",
    id: "phone",
    name: "phone",
    placeholder: "Phone number",
    labelClass: "text-[17px] text-customBlue font-medium",
    icon: image.phone,
  },
  {
    label: "Password",
    type: "password",
    id: "password",
    name: "password",
    placeholder: " Password",
    labelClass: "text-[17px] text-customBlue font-medium",
    icon: image.key,
  },
  {
    label: "Confirm Password",
    type: "password",
    id: "confirmPassword",
    name: "confirmPassword",
    placeholder: "Password",
    labelClass: "text-[17px] text-customBlue font-medium",
    icon: image.key,
  },
];

export const recentCards = [
  {
    picture: "/card1.png",
    title: "Birthday Event (London)",
    date: "23 Oct 2024",
    icon: "/dot.svg",
  },
  {
    picture: "/card2.png",
    title: "Sarmad’s Wedding (Lahore)",
    date: "23 Oct 2024",
    icon: "/dot.svg",
  },
  {
    picture: "/card1.png",
    title: "Halloween Party (Morroco)",
    date: "23 Oct 2024",
    icon: "/dot.svg",
  },
  {
    picture: "/card4.png",
    title: "Chrismas Night (Paris)",
    date: "23 Oct 2024",
    icon: "/dot.svg",
  },
  {
    picture: "/card5.png",
    title: "Easter Day",
    date: "20 Apr 2024",
    icon: "/dot.svg",
  },
];
