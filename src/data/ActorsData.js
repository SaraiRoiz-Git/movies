import moment from "moment";
import { v4 as uuid } from "uuid"
class ActorsData {
    constructor(name, image, id) {
        this.name = name;
        this.image = image;
        this.id = id;
    }
}
export default ActorsData