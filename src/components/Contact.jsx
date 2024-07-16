import React from "react";
import toast from "react-hot-toast";

function Contact() {
  const [pending, setPending] = React.useState(false);

  /**
   * 
   * @param {import("react").FormEvent} event 
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    setPending(true);

    setTimeout(
      () => {
        toast.success("Thank you for your message! I will get back to you as soon as possible.");
        setPending(false);
        event.target.reset();
      },
      1000
    );
  };

  return <form className="mt-10 flex flex-col dark:text-black max-w-[800px] mx-auto" onSubmit={handleSubmit}>
    <input
      className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
      name="senderEmail"
      type="email"
      required
      maxLength={500}
      placeholder="Enter your email"
    />
    <textarea
      className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
      name="message"
      placeholder="Enter your message here..."
      required
      maxLength={5000}
    />
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
        </>
      )}
    </button>
  </form>;
}

export default Contact;
