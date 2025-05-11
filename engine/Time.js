class Time {
    static msBetweenFrames = 20                     // Sets how many milliseconds are between each from
    static fps = 1000 / Time.msBetweenFrames        // Sets the fps
    static deltaTime = Time.msBetweenFrames / 1000  // Sets the deltaTime
}