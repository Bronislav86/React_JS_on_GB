const CAR_SELECTED = "CAR_SELECTED"

export const select = (car) => {
    return {
        type: CAR_SELECTED,
        payload: car,
    }
};