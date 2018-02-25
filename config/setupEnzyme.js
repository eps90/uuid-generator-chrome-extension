import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ReactGa from "react-ga";

Enzyme.configure({adapter: new Adapter()});
ReactGa.initialize("foo", {testMode: true});