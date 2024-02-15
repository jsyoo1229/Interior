export function fetchData(url, data, $answer) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        redirect: 'follow'
    })
    .then(res => res.json())
    .then(res => {
        if (res.choices && res.choices.length > 0) {
            // $answer.innerHTML = `<p>${res.choices[0].message.content}</p>`;
            const formattedText = res.choices[0].message.content
            .split('\n') // 줄바꿈으로 나누기
            .map(line => `<p>${line}</p>`) // 각 줄을 p 태그로 래핑
            .join(''); // 다시 하나의 문자열로 합치기
            $answer.innerHTML = formattedText;
        } else {
            $answer.innerHTML = `<p>응답이 예상과 다릅니다.</p>`;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        $answer.innerHTML = `<p>오류가 발생했습니다. 다시 시도해주세요.</p>`;
    });
}
