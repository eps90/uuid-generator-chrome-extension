import '@testing-library/jest-dom';
import ReactGa from "react-ga";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";


ReactGa.initialize("UA-0000000-0", { testMode: true });


library.add(fas);
