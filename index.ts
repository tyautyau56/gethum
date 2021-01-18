import Aqua from "aqua";

const app = new Aqua(3100);

app.get("/", () => {
    return "Hello World";
});
