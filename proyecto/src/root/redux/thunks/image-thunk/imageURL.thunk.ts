import { fileProvider, routeRegisterDispatchType, setImagesUrl, startLoading, stopLoading } from "@/root";

export const imageUpload = (route: string, file: File): any => {
    return async (dispatch: routeRegisterDispatchType) => {
        dispatch(startLoading());
        const imageUrl = await fileProvider.uploadImage(route, file);
        dispatch(setImagesUrl(imageUrl));
        dispatch(stopLoading());
    };
};
