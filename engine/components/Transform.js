class Transform extends Component {
    x   // x coordinate
    y   // y coordinate
    r   // Radius for a circle (or width [w] for a rectangle) (or x2)
    h   // Height for a rectangle 


// ==========================================================================
// --- WIDTH / RADIUS ---
// ======================
    get w() {            // Gets the width (r)
        return this.r
    }

    set w(value) {       // Sets the width (r)
        this.r = value
    }


// ==========================================================================
// --- X2 ---
// ==========
    get x2() {           // Gets x2 (r)
        return this.r
    }

    set x2(value) {      // Sets x2 (r)
        this.r = value
    }

    
// ==========================================================================
// --- Y2 / HEIGHT ---
// ===================
    get y2() {           // Gets y2 (h)
        return this.h
    }

    set y2(value) {      // Sets y2 (h)
        this.h = value
    }

// ==========================================================================
// --- POSITIONAL ---
// ==================
    setPosition(vector) {
        this.x = vector.x
        this.y = vector.y
    }

    move(vector) {
        this.x += vector.x
        this.y += vector.y
    }

    get position()  {
        return new Vector2(this.x, this.y)
    }

    set position(vector) {
        this.x = vector.x
        this.y = vector.y
    }
}