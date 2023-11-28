fetch('http://localhost:8080/banapresso/store', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(res => res.json())
    .then(data => {
        const storeList = document.getElementById('store_list');

        for (let i = 0; i < 123; i++) {
            const li = document.createElement('li');
            li.innerHTML = `
                    <div class="img">
                        <img src="./image/bana${i}.jpg" alt="가산디지털단지역점 매장 사진">
                    </div>
                    <div class="info">
                        <i class="store_name">${data[i].store_name}</i>
                        <span class="store_address">${data[i].store_address}</span>
                    </div>
                `;
            storeList.appendChild(li);
        }
        // 주소-좌표 변환 객체를 생성합니다
        var geocoder = new kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch('제주특별자치도 제주시 첨단로 242', function (result, status) {

            // 정상적으로 검색이 완료됐으면 
            if (status === kakao.maps.services.Status.OK) {

                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                // 결과값으로 받은 위치를 마커로 표시합니다
                var marker = new kakao.maps.Marker({
                    map: map,
                    position: coords
                });

                // 인포윈도우로 장소에 대한 설명을 표시합니다
                var infowindow = new kakao.maps.InfoWindow({
                    content: '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>'
                });
                infowindow.open(map, marker);

                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                map.setCenter(coords);
            }
        });
    })

    .catch(error => console.error('Error:', error));
