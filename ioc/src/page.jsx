import React from 'react'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import {Page1} from "../src/coponents/pages/page1";
import {Page2} from "../src/components/pages/page2";

export default function page() {
  return (
    <>
    <BrowserRouter>
    <div>
        <Link to="/">to top</Link>
        <br />
        <Link to="/page1">to company</Link>
        <br />
        <Link to="/page2">to contact</Link>

        <Routes>
            <Route path="/" element={<Top />} />
            <Route path="page1" element={<Page1 />} />
            <Route path="page2" element={<Page2 />} />
        </Routes>
    </div>
    </BrowserRouter>
    </>
  );
};

