# 인테리어 디자인 추천 서비스
## 1. 목표
* 인공지능 모델을 활용하여, 사용자의 취향에 맞는 인테리어 디자인 커스터마이즈 서비스 제공

## 2. 개발환경 및 배포 URL
### 1) 개발환경
* HTML, CSS, JAVASCRIPT, OpenAI API, Bootstrap, Visual Studio Code

### 2) 배포 URL
* https://jsyoo1229.github.io/Interior/

## 3. URL 구조

<table>
    <tr>
        <th>URL</th>
        <th>Function</th>
        <th>HTML File Name</th>
        <th>Note</th>
    </tr>
    <tr>
        <td>'Interior/home'</td>
        <td>home</td>
        <td>Interior/home.html</td>
        <td>홈 화면</td>
    </tr>
    <tr>
        <td>'interior/interior_design'</td>
        <td>interior design advice</td>
        <td>interior/interior_design.html</td>
        <td>인테리어 디자인 추천 기능</td>
    </tr>
    <tr>
        <td>'interior/furniture'</td>
        <td>furniture lists</td>
        <td>Interior/furniture.html</td>
        <td>가구 목록 및 구매 사이트 연결</td>
    </tr>
</table>

## 4. 요구사항과 기능 명세
![기능명세](https://github.com/jsyoo1229/Interior/assets/112743397/0fb211d5-c99f-4ca0-ba66-09379872370e)


## 5. 프로젝트 구조
* interior<br>
    ├──assets<br>
    ├──css<br>
    ├──js<br>
    ├──furniture.html<br> 
    ├──home.html<br>
    ├──interior_design.html<br>    

  modules<br>
    ├──data.js<br>
    ├──fetchData.js<br> 
    ├──script.js<br>
    ├──userAnswers.js<br>              
      
## 6. 개발 일정
![일정 WBS-2024-02-15-150254](https://github.com/jsyoo1229/Interior/assets/112743397/a6eda0ca-c6a7-4d68-aa17-12b82a18f316)

## 7. UI
* home화면으로, 버튼과 하이퍼링크 텍스트로, 인테리어 추천과, 가구 목록 화면으로 이동할 수 있습니다.<br>
  ![Home](https://github.com/jsyoo1229/Interior/assets/112743397/0eada73f-a4e3-44df-a972-acaba0e90a4e)

* 인테리어 디자인 추천 기능이 있습니다. 사용자에게서 받은 10가지 설문의 데이터를 바탕으로, 인공지능 모델 api가 맞춤형 디자인을 추천해줍니다.<br>
  ![Interior_design](https://github.com/jsyoo1229/Interior/assets/112743397/c63f7abf-7d33-45e3-b0a2-965630581a59)

* '구매' 버튼을 누르면, 인테리어에 필요한 가구들을, 종류별로 구매 가능한 사이트에 연결시켜줍니다.<br>
  ![furniture](https://github.com/jsyoo1229/Interior/assets/112743397/cbc2a173-ea2b-4d0f-a56d-6312adc7ffa2)


## 8. 화면 설계
* 홈 화면에서 인테리어 디자인 추천 기능으로 이동<br><br>
  ![Home](https://github.com/jsyoo1229/Interior/assets/112743397/2f324a87-74b1-4510-93cc-52730374203b)  <br>

* 인테리어 디자인 추천 기능 시연<br><br>
  ![Interior_design](https://github.com/jsyoo1229/Interior/assets/112743397/26be198a-2ce1-4740-b40b-3d7d584880f8)  <br>

* 구매 가능한 사이트 연결 기능 시연<br><br>
  ![furniture](https://github.com/jsyoo1229/Interior/assets/112743397/90ad0973-34cb-4511-af08-a706dc92c1fe)  <br>

## 9. Architecture
![Architecture](https://github.com/jsyoo1229/Interior/assets/112743397/999553f1-7dfb-42fc-bff0-18f278c02949)

## 10. 메인 기능
![인테리어 디자인 추천 기능](https://github.com/jsyoo1229/Interior/assets/112743397/2dfa343d-0fd4-4c6a-848d-ee441a320a8a)

## 11. 에러해결
* api의 응답을, 의도하는 대로 유도하는 데서, 가장 큰 어려움을 느꼈습니다. 의도하는 바대로, 응답을 이끌어내기 위해서는, 저 스스로가 사용자에게 주고자 하는 서비스를, 정확히, 깊이 이해할 필요가 있다고 느꼈습니다. <br>그러기 위해서는, 저 스스로 인테리어 디자인의 핵심 요소가 무엇인지 알아야 했습니다. 나름대로의 조사 후, 액세서리, 배치도, 공간 활용과 같은 중요한 개념을 알게 되었고, 그 단어들을 api에게 전달하면서, 응답이 전보다 구체적으로 개선 되었습니다.<br>

## 12. 개발하며 느낀점
* 미니프로젝트이지만, 직접 웹사이트를 제작하면서, html, css, js의 쓰임을 체득하게 되는 느낌을 받았습니다. <br>
평소, 이해가 잘 안되고, 귀찮아서 직접 코드를 짜보기 꺼려했던, CSS와 JS였는데, html과 css의 구조 파악에도 이제는 자신감이 붙었습니다.<br>
또, 평소 꼭 한번 해내고 싶었던 부트스트랩 적용에도 성공한 점이 저에게는 큰 의미였습니다.<br>
마지막으로, 앞으로 이런 미니프로젝트를, 혼자서 자주 해 볼 의욕을 가지게 된 것이 가장 큰 수확인 것 같습니다.




    
    


