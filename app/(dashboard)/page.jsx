"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();

  const [jwtToken, setJwtToken] = useState("");

  useEffect(() => {
    if (window) {
      const jwtToken = window.sessionStorage.getItem("jwtToken");
      if (jwtToken === null) {
        router.push("/login");
      }
      setJwtToken(jwtToken);
    }
  }, []);

  return <div>page</div>;
}

export default page;
