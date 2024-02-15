export function getUserAnswer(elementsValue) {
    return "인테리어 디자인에 대한 사용자 응답:\n" +
        "1. 선호하는 거실 스타일: " + document.querySelector('[name="livingRoomStyle"]:checked').value + "\n" +
        "2. 가장 선호하는 색상: " + document.getElementById('favoriteColor').value + "\n" +
        "3. 거실에 추가하고 싶은 요소: " + elementsValue.join(", ") + "\n" +
        "4. 주방 바닥재: " + document.querySelector('[name="kitchenFlooring"]:checked').value + "\n" +
        "5. 침실 조명: " + document.querySelector('[name="bedroomLighting"]:checked').value + "\n" +
        "6. 홈 오피스 필수 요소: " + document.querySelector('[name="homeOfficeEssential"]:checked').value + "\n" +
        "7. 화장실 스타일: " + document.querySelector('[name="bathroomStyle"]:checked').value + "\n" +
        "8. 창문 처리: " + document.querySelector('[name="windowTreatment"]:checked').value + "\n" +
        "9. 야외 공간 스타일: " + document.querySelector('[name="outdoorSpaceStyle"]:checked').value + "\n" +
        "10. 추가 조언 요청: " + document.getElementById('additionalAdvice').value;
}
