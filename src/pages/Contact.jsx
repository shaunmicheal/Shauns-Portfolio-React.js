function Contact() {
  const contacts = [
    {
      platform: "Email",
      value: "shaunjeranyama@gmail.com",
      link: "mailto:shaunjeranyama@gmail.com",
    },
    {
      platform: "LinkedIn",
      value: "shaunjeranyama",
      link: "https://www.linkedin.com/in/shaunjeranyama/",
    },
    {
      platform: "GitHub",
      value: "shaunmicheal",
      link: "https://github.com/shaunmicheal",
    },
    {
      platform: "Instagram",
      value: "shaunchimaz",
      link: "https://instagram.com/shaunchimaz",
    },
    {
      platform: "Facebook",
      value: "Shaun Chimaz",
      link: "https://www.facebook.com/profile.php?id=100065155573077&mibextid=rS40aB7S9Ucbxw6v",
    },

    {
      platform: "WhatsApp",
      value: "+263 781 993 443",
      link: "https://wa.me/263781993443",
    },
  ];

  return (
    <div className="page-container">
      <h1>Contact Me</h1>
      <ul className="contact-list">
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.platform}:{" "}
            <a href={contact.link} target="_blank" rel="noopener noreferrer">
              {contact.value}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contact;
