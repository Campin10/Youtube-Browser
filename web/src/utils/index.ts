export const getVideoIdFromUrl = (url: string): string | null => {
    const [, videoId] = url.split("v=")
    return videoId
}


export const getFormatMinutesAndSecond = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60)
    const restSeconds = seconds - (minutes * 60)
    const labelSeconds = restSeconds < 10 ? `0${restSeconds}` : restSeconds
    return `${minutes}:${labelSeconds}`
}

