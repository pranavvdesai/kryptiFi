import React, {useState} from "react";
import {
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaSkype,
  FaTwitter,
} from "react-icons/fa";
import Web3 from "web3";
import { ethers } from 'ethers';
import profile from "./../../../../images/profile.jpg";

const socials = [
  {
    id: 1,
    icon: <FaFacebookF />,
    link: "#0",
  },
  {
    id: 2,
    icon: <FaGithub />,
    link: "#0",
  },
  {
    id: 3,
    icon: <FaLinkedinIn />,
    link: "#0",
  },
  {
    id: 4,
    icon: <FaInstagram />,
    link: "#0",
  },
  {
    id: 5,
    icon: <FaBehance />,
    link: "#0",
  },
  {
    id: 6,
    icon: <FaDribbble />,
    link: "#0",
  },
  {
    id: 7,
    icon: <FaSkype />,
    link: "#0",
  },
  {
    id: 7,
    icon: <FaTwitter />,
    link: "#0",
  },
];

const Sidebar = () => {
  const [amt, setAmt] = useState(1);
  const [receiver_address, setReceiverAddress] = useState("0x48776ffAf07Dd31b22074380559E0895fAc5Cb2c");
  const [account, setAccount] = useState("");
  const [value, setValue] = React.useState(0);
  const [txs, setTxs] = useState([]);
  const ethervalue = [];

  const startPayment = async ({ setTxs, ether, to_addr }) => {
    try {
      if (!window.ethereum)
        throw new Error("No crypto wallet found. Please install it.");

      await window.ethereum.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      ethers.utils.getAddress(to_addr);
      const tx = await signer.sendTransaction({
        to: to_addr,
        value: ethers.utils.parseEther(ether)
      });
      ethervalue.push({
        ether, to_addr
      })
      const tx_from = tx.from;

      
        



      console.log({ ether, to_addr, tx_from });
      console.log("tx", tx);
      console.log("ethervalue", ethervalue);
      setTxs([tx]);
    } catch (err) {
      console.log(err)
    }
  };

  const stake = async () => {
    console.log(amt)
    // transactions.methods.send(receiver_address, amt).send({ from: account });
    await startPayment({
      setTxs,
      ether: amt.toString(),
      to_addr: receiver_address
    });
  }
  return (
    <aside className="sticky top-0 bg-white md:mx-8 lg:mx-4 mb-8 p-6 shadow-md rounded-md -mt-40">
      <div className="w-24 h-24 rounded-md overflow-hidden mx-auto mb-5">
        <img src={profile} alt="shafiqhammad" className="w-full" />
      </div>
      <div className="text-center">
        <h1 className="text-xl text-gray-800 font-bold mb-1">John Doe</h1>
        <p className="text-sm text-gray-400 mb-3">
          Frontend Web Developer at
          <a href="#0" className="text-purple-600 pl-1">
            Abc Company
          </a>
        </p>
        <button
          onClick={stake}
          className="inline-block mb-3 rounded bg-purple-600 text-center border-0 py-2 px-6 text-white leading-7 tracking-wide hover:bg-purple-800"
          download="Resume"
        >
          Donate
        </button>
        <ul className="flex flex-wrap justify-center">
          {socials.map((social, id) => (
            <SocialIcon social={social} key={id} />
          ))}
        </ul>
      </div>
      <div className="text-start pt-4">
        <h3 className="text-md mb-2 uppercase font-medium text-gray-800">
          About Me
        </h3>
        <p className="text-gray-400 text font-light leading-relaxed">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;

const SocialIcon = (props) => {
  const { icon, link } = props.social;
  return (
    <li className="m-2">
      <a
        href={link}
        className="w-8 h-8 bg-purple-100 rounded text-purple-800 flex items-center justify-center hover:text-white hover:bg-purple-600"
      >
        {icon}
      </a>
    </li>
  );
};
