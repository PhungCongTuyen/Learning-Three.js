import FirstThing from "../view/first-thing/FirstThing";
import SecondThing from "../view/second-thing/SecondThing";
import ThirdThing from "../view/third-thing/ThirdThing";
import Interview from "../view/interview/Interview";
import Thumbnail from "../assets/images";

const ROUTES = {
    INTERVIEW: {
        path:"/",
        exact: true,
        thumb: null,
        component: Interview
    },
    FIRST_THING: {
        path:"/first-thing",
        exact: true,
        thumb: Thumbnail.Cube,
        component: FirstThing
    },
    SECOND_THING: {
        path:"/second-thing",
        exact: true,
        thumb: Thumbnail.Cube,
        component: SecondThing
    },
    THIRD_THING: {
        path:"/third-thing",
        exact: true,
        thumb: Thumbnail.Cube,
        component: ThirdThing
    },
};

export default ROUTES;