import React from "react";
import { useRouter } from "next/router";

const Slug = () => {
  const router = useRouter();
  const { slug } = router;
  return <div>Slug is {slug} </div>;
};

export default Slug;
