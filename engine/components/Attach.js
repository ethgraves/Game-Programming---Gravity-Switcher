// Attaches one block to another block

class Attach {
    static attach(objectAttaching, objectAttachingTo, side) {
        if (side == "top") {
            // x Axis
            objectAttaching[0] = objectAttachingTo[0]

            // y Axis
            objectAttaching[1] = (objectAttachingTo[1] / 2) + (objectAttachingTo[1])
            // objectAttaching[1] = objectAttachingTo[1] - (objectAttaching[2] + 1)
        
            return objectAttaching
        }
        
        else if (side == "bottom") {
            objectAttaching[0] = objectAttachingTo[0]
            objectAttaching[1] = objectAttachingTo[1] + (objectAttaching[2] + 1)
        
            return objectAttaching
        }
        
        else if (side == "left") {
            objectAttaching[0] = objectAttachingTo[0] - (objectAttaching[3] + 1)
            objectAttaching[1] = (objectAttaching[2] * objectAttaching[5] + objectAttaching[2])
        
        
            return objectAttaching
        }
        
        else if (side == "right") {
            objectAttaching[0] = objectAttachingTo[0] + (objectAttaching[3] + 1)
            objectAttaching[1] = (objectAttaching[2] * objectAttaching[5] + objectAttaching[2])
        
        
            return objectAttaching
        }
        
    }
}

// if (side == "top") {
//     objectAttaching[0] = objectAttachingTo[0]
//     objectAttaching[1] = objectAttachingTo[1] - (objectAttaching[2] + 1)

//     return objectAttaching
// }

// else if (side == "bottom") {
//     objectAttaching[0] = objectAttachingTo[0]
//     objectAttaching[1] = objectAttachingTo[1] + (objectAttaching[2] + 1)

//     return objectAttaching
// }

// else if (side == "left") {
//     objectAttaching[0] = objectAttachingTo[0] - (objectAttaching[3] + 1)
//     objectAttaching[1] = (objectAttaching[2] * objectAttaching[5] + objectAttaching[2])


//     return objectAttaching
// }

// else if (side == "right") {
//     objectAttaching[0] = objectAttachingTo[0] + (objectAttaching[3] + 1)
//     objectAttaching[1] = (objectAttaching[2] * objectAttaching[5] + objectAttaching[2])


//     return objectAttaching
// }
