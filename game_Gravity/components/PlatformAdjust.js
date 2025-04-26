class PlatformAdjust extends Component{
    static platformAdjustFloor(floorPlatforms){
        for (let platform of floorPlatforms){
            platform[1] += platform[3] / 2

        return floorPlatforms
        }
    }

    static platformAdjustCeiling(ceilingPlatforms){
        for (let platform of ceilingPlatforms){
            platform[1] -= platform[3] / 2

        return ceilingPlatforms
        }
    }
}