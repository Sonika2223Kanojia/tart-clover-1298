// import React from 'react'
//import { Link } from 'react-router-dom'
// import styled from 'styled-components'

import React, { useEffect, useState } from "react";
import img from "../Images/Elegant_Online_Shopping_Logo_Template-removebg-preview (3) (1).jpg";
import { Box, Image, Link, HStack, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
// import { Link  } from 'react-router-dom'; // You need to import this for routing
// import { ShoppingCartIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const color = "#323239";
  const green = "#00c258";

  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("logedUser"));
    const authStatus = localStorage.getItem("isAuth") === "true";

    setUser(user);
    setIsAuth(authStatus);
  }, []);

  return (
    <Box p={4} color="white">
      <Box
        maxWidth="95%"
        marginTop="10px"
        display="flex"
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center"
      >
        {" "}
        <Image src={img} alt="Your Logo" margin=" 0px 30px" width="120px" />
        {/* <Spacer /> */}
        <HStack
          spacing={4}
          width="40%"
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          margin={"0px 30px"}
          alignItems="center"
          color={"#29C250"}
          fontWeight={600}
        >
          <Link href="/" fontSize="lg" textDecoration="none" color={green}>
            Home
          </Link>
          <Link
            href="/products"
            fontSize="lg"
            textDecoration="none"
            color={green}
          >
            Products
          </Link>
          <Link
            href="/aboutus"
            fontSize="lg"
            textDecoration="none"
            color={green}
          >
            About Us
          </Link>

          <Link href="/cart" fontSize="lg" textDecoration="none" color={green}>
            cart
          </Link>

          <Link
            href="/payment"
            fontSize="lg"
            textDecoration="none"
            color={green}
          >
            Payment
          </Link>

          {/* <IconButton
          
            to="/cart"
            icon={<ShoppingCartIcon />}
            aria-label="Shopping Cart"
            variant="solid"
            bg="white"
          /> */}
          {/* <Avatar size="sm" name="User" src="https://bit.ly/dan-abramov" /> */}
        </HStack>
        {isAuth ? (
          <Button w="10%" bg="teal" color="white" height="50px">
            <Link href={`/userpage`}>Hi, {user[0].firstName}</Link>
          </Button>
        ) : (
          <Button
            to="/login"
            size="md"
            height="40px"
            width="100px"
            border="none"
            borderRadius="5px"
            bg={green}
            color={"white"}
            fontSize="lg"
            fontWeight={600}
          >
            <Link href={`/login`}>Login</Link>
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
