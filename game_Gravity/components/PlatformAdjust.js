class PlatformAdjust extends Component{
    static adjustVerticalTop(platforms){
        for (let platform of platforms)
            platform[1] += platform[3] / 2

        return platforms
    }

    static adjustVerticalBottom(platforms){
        for (let platform of platforms)
            platform[1] -= platform[3] / 2

        return platforms
    }

    static adjustHorizontalLeft(platforms){
        for (let platform of platforms)
            platform[0] += platform[2] / 2

        return platforms
    }

    static adjustHorizontalRight(platforms){
        for (let platform of platforms)
            platform[0] -= platform[2] / 2

        return platforms
    }
    
}

// adjustHorizontalTop