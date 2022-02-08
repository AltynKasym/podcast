import { useState } from "react";

const [openPlatforms, setOpenPlatforms] = useState(false);
function platformSlider() {
  setOpenPlatforms(!openPlatforms);
}

const [openSearch, setOpenSearch] = useState(false);
function searchSlider() {
  setOpenSearch(!openSearch);
}
