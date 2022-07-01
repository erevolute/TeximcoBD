import Head from "next/head";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Captcha from "react-numeric-captcha";

export default function Home() {
  const [error, setError] = useState(false);
  const [img, setImg] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [captchaSuccess, setcaptchaSuccess] = useState(false);

  console.log(captchaSuccess.captchaSuccess);

  useEffect(() => {
    console.log(img?.size);

    if (img?.size > 500000) {
      setError(true);
    }
    if (img?.size < 500000) {
      setError(false);
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const emails = event.target.email.value;

    const formData = new FormData();
    formData.append("img", img);
    formData.append("email", emails);
    formData.append("name", name);
    formData.append("message", message);

    console.log(emails, img, name, message);
    // const aj = ({email , img , name , message})

    fetch("http://localhost:5000/contact", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        event.target.reset();
      });
  };

  return (
    <div>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <h1 className="text-center text-5xl mt-10 mb-16">Our Management</h1>
      <div className="our-management">
        <div className="management-card">
          <h1 className="text-2xl font-bold"> Mohammad Mijanur Rahman</h1>
          <p className="management-content">
            Position: Managing Director
            <br />
            E-mail:{" "}
            <a href="mailto:mijan@teximcobd.com ">mijan@teximcobd.com </a>{" "}
          
            <br />
            Contact Number: <a href="tel:+8801914682466">+88 01914682466</a>
            <br />
            Skype: mijan.dhk, WeChat: TEXIMCO
          </p>
        </div>

        <div className="management-card">
          <h1 className="text-2xl font-bold"> Farjana Akter</h1>
          <p className="management-content">
            Position: Chairman
            <br />
            E-mail:{" "}
            <a href="mailto:farjana@teximcobd.com">farjana@teximcobd.com</a>
            <br />
          </p>
        </div>

        <div className="management-card">
          <h1 className="text-2xl font-bold"> Md. Mostafa Kamal</h1>
          <p className="management-content">
            Position: Director( Marketing & Merchandising) <br />
            E-mail:{" "}
            <a href="mailto:mostofa@teximcobd.com">mostofa@teximcobd.com</a> <br />
          </p>
        </div>

        <div className="management-card">
          <h1 className="text-2xl font-bold"> Md. Mozibul Haque  </h1>
          <p className="management-content">
           
                Position: Director(International Marketing)
                <br />
                E-mail:{" "}
                <a href="mailto:mozibul@teximcobd.com">mozibul@teximcobd.com</a>
          </p>
        </div>
      </div>

      <h1 className="text-center text-5xl mt-10 mb-16">Contact Us</h1>
      <div className="addresses  mb-16">
        <div className="address">
          <h1 className="text-2xl font-bold">Bangladesh Address : </h1>
          <br />
          <p>
            House # 72,
            <br /> Road # 15, Sector # 11,
            <br /> Uttara, Dhaka-1230,
            <br /> Bangladesh.
          </p>
        </div>
        <div className="address">
          <h1 className="text-2xl font-bold">UAE Address : </h1>
          <br />
          <p>
            Youngboy Germents FZC , <br /> Ajman Free Zone , <br /> P. O. Office
            21166 , Ajman ,<br /> UAE.
          </p>
        </div>
        <div className="address">
          <h1 className="text-2xl font-bold">China Address : </h1>
          <br />
          <p>
            Ningbo Allinroot Apparel Co. Ltd. <br /> Room 318 Yingsheng Plaza ,{" "}
            <br /> No.456 Tai an Road, <br /> Yinzhou, Ningbo-315100,
            <br /> China.
          </p>
        </div>
      </div>
      <div className="contact-container pb-20">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              width="100%"
              height="600"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
            <a href="https://2piratebay.org"></a>
            <br />
            <a href="https://www.embedgooglemap.net"></a>
          </div>
        </div>
        <div className="form-container">
          <h1 className="text-center text-5xl mt-2">Get In Touch</h1>
          <form
            action="http://localhost:5001/contacts"
            method="post"
            encType="multipart/form-data"
          >
            <input
              type="text"
              name="name"
              onBlur={(e) => setName(e.target.value)}
              required
              placeholder="Full Name"
              className="input input-bordered input-info w-full max-w-xs m-4"
            />

            <input
              type="email"
              name="email"
              onBlur={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter Email"
              className="input input-bordered input-info w-full max-w-xs m-4"
            />

            <textarea
              type="text"
              name="message"
              onBlur={(e) => setMessage(e.target.value)}
              className="textarea textarea-info input-bordered input-info h-full w-full max-w-xs m-4"
              placeholder="Message"
            />

            {error && (
              <small className="text-center text-red-600 block">
                file size cannot be more than 500kb
              </small>
            )}

            {/* <input type="file" name='attachment'   onChange={(e) => setImg(e.target.files[0])}  /> */}

            <div className="form-file">
              <input
                className="file input-bordered input-info w-full max-w-xs m-4"
                name="attachment"
                onChange={(e) => setImg(e.target.files[0])}
                placeholder="select"
                type="file"
                id=""
              />
            </div>
            <Captcha
              onChange={(status) =>
                setcaptchaSuccess({ captchaSuccess: status })
              }
            />
            <button
              type="submit"
              disabled={!captchaSuccess.captchaSuccess || error}
              className="shop-button3  m-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
