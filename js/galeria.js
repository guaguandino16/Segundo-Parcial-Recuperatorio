document.addEventListener('DOMContentLoaded', function () {
    const obras = [
        {
            nombre: 'Vicious Circular Breathing',
            anio: '2013',
            video: 'https://www.lozano-hemmer.com/videos/artwork/vcb_mexico_2016_rlh_001.mp4',
            imagenes: [
            'https://www.lozano-hemmer.com/image_sets/vicious_circular_breathing/monterrey_2019/vcb_monterrey_2019_my_505A7355.jpg',
            'https://www.lozano-hemmer.com/image_sets/vicious_circular_breathing/monterrey_2019/vcb_monterrey_2019_my_505A7356.jpg',
            'https://www.lozano-hemmer.com/image_sets/vicious_circular_breathing/monterrey_2019/vcb_monterrey_2019_my_505A7358.jpg',
            ]
        },
        {
            nombre: 'Sphere Packing: Bach',
            anio: '2018',
            video: 'https://www.lozano-hemmer.com/videos/artwork/sphere_packing_bach_montreal_2018_rlh_001.mp4',
            imagenes: [
            'https://www.lozano-hemmer.com/image_sets/sphere_packing_bach/naples_2024/sphere_packing_bach_naples_2024_rlh_002.jpg',
            'https://www.lozano-hemmer.com/image_sets/sphere_packing_bach/naples_2024/sphere_packing_bach_naples_2024_rp_001.jpg',
            'https://www.lozano-hemmer.com/image_sets/sphere_packing_bach/naples_2024/sphere_packing_bach_naples_2024_rp_002.jpg',
            ]
        },
        {
            nombre: 'Body Movies',
            anio: '2001',
            video: 'https://www.lozano-hemmer.com/videos/artwork/bodymovies_rotterdam.mp4',
            imagenes: [
            'https://www.lozano-hemmer.com/image_sets/body_movies/hongkong_2006/bodymovies_hongkong_01.jpg',
            'https://www.lozano-hemmer.com/image_sets/body_movies/hongkong_2006/bodymovies_hongkong_02.jpg',
            'https://www.lozano-hemmer.com/image_sets/body_movies/hongkong_2006/bodymovies_hongkong_03.jpg',
            ]
        },
        {
            nombre: 'Pulse Room',
            anio: '2006',
            video: 'https://www.lozano-hemmer.com/videos/artwork/pulseroom_puebla.mp4',
            imagenes: [
            'https://www.lozano-hemmer.com/image_sets/pulse_room/kanazawa_2025/pulse_room_kanazawa_2025_ko_001.jpg',
            'https://www.lozano-hemmer.com/image_sets/pulse_room/kanazawa_2025/pulse_room_kanazawa_2025_ko_002.jpg',
            'https://www.lozano-hemmer.com/image_sets/pulse_room/kanazawa_2025/pulse_room_kanazawa_2025_ko_003.jpg',
            ]
        },
        {
            nombre: 'Tape Recorders',
            anio: '2011',
            video: 'https://www.lozano-hemmer.com/videos/artwork/taperecorders_sydney_02.mp4',
            imagenes: [
            'https://www.lozano-hemmer.com/image_sets/tape_recorders/sydney_2011/2011_12_AD_01_TR.jpg',
            'https://www.lozano-hemmer.com/image_sets/tape_recorders/sydney_2011/2011_12_AD_02_TR.jpg',
            ]
        },
        {
            nombre: '33 Questions per Minute',
            anio: '2000',
            video: 'https://www.lozano-hemmer.com/videos/artwork/33qpm_istanbul.mp4',
            imagenes: [
            'https://www.lozano-hemmer.com/image_sets/33_questions_per_minute/san_francisco_2021/33_questions_per_minute_san_francisco_2021_kdt_001_2.jpg',
            'https://www.lozano-hemmer.com/image_sets/33_questions_per_minute/san_francisco_2021/33_questions_per_minute_san_francisco_2021_kdt_002_2.jpg',
            'https://www.lozano-hemmer.com/image_sets/33_questions_per_minute/san_francisco_2021/33_questions_per_minute_san_francisco_2021_kdt_003_2.jpg',
            ]
        },
        {
            nombre: 'Please Empty Your Pockets',
            anio: '2010',
            video: 'https://www.lozano-hemmer.com/videos/artwork/pleaseemptyyourpockets.mp4',
            imagenes: [
            'https://www.lozano-hemmer.com/image_sets/please_empty_your_pockets/new_york_2015/please_empty_your_pockets_new_york_2015_jbp_018.jpg',
            'https://www.lozano-hemmer.com/image_sets/please_empty_your_pockets/new_york_2015/please_empty_your_pockets_new_york_2015_jbp_021.jpg',
            'https://www.lozano-hemmer.com/image_sets/please_empty_your_pockets/new_york_2015/please_empty_your_pockets_new_york_2015_jbp_022.jpg',
            ]
        },
        {
            nombre: 'Vectorial Elevation',
            anio: '1999',
            video: 'https://www.lozano-hemmer.com/videos/artwork/vectorialelevation_mexico.mp4',
            imagenes: [
            'https://www.lozano-hemmer.com/image_sets/vectorial_elevation/vancouver_2010/VE_VAN_DF_01.jpg',
            'https://www.lozano-hemmer.com/image_sets/vectorial_elevation/vancouver_2010/VE_VAN_DF_02.jpg',
            'https://www.lozano-hemmer.com/image_sets/vectorial_elevation/vancouver_2010/VE_VAN_DF_03.jpg',
            ]
        },
        {
            nombre: 'Thermal Poem',
            anio: '2022',
            video: 'https://www.lozano-hemmer.com/videos/artwork/thermal_poem_basel_2022_rlh_001.mp4',
            imagenes: [
            'https://www.lozano-hemmer.com/image_sets/thermal_poem/basel_2022/thermal_poem_2022_basel_tm_001.jpg',
            'https://www.lozano-hemmer.com/image_sets/thermal_poem/basel_2022/thermal_poem_2022_basel_tm_002.jpg',
            'https://www.lozano-hemmer.com/image_sets/thermal_poem/basel_2022/thermal_poem_2022_basel_tm_007.jpg',
            ]
        },
        {
            nombre: 'Hormonium',
            anio: '2022',
            video: 'https://www.lozano-hemmer.com/videos/artwork/hormonium_montreal_2022_001.mp4',
            imagenes: [
            'https://www.lozano-hemmer.com/image_sets/hormonium/mexico_city_2025/hormonium_mexico_city_2025_rlh_001.jpg',
            'https://www.lozano-hemmer.com/image_sets/hormonium/pasadena_2024/hormonium_pasadena_2024_rlh_018.jpg',
            'https://www.lozano-hemmer.com/image_sets/hormonium/paris_2024/hormonium_paris_2024_pd_001.jpg',
            ]
        },
        {
            nombre: 'Arkansas Text Stream',
            anio: '2022',
            video: 'https://www.lozano-hemmer.com/videos/artwork/arkansas_text_stream_bentonville_2023_rlh_001.mp4',
            imagenes: [
            'https://www.lozano-hemmer.com/image_sets/arkansas_text_stream/bentonville_2023/arkansas_text_stream_bentonville_2023_er_001.jpg',
            'https://www.lozano-hemmer.com/image_sets/arkansas_text_stream/bentonville_2023/arkansas_text_stream_bentonville_2023_er_003.jpg',
            'https://www.lozano-hemmer.com/image_sets/arkansas_text_stream/bentonville_2023/arkansas_text_stream_bentonville_2023_er_006.jpg',
            ]
        },
        {
            nombre: 'Pulse Garden',
            anio: '2026',
            video: 'https://www.lozano-hemmer.com/videos/artwork/pulse_garden_mexico_city_2026_rlh_001.mp4',
            imagenes: [
            'https://www.lozano-hemmer.com/image_sets/pulse_garden/mexico_2026/pulse_garden_mexico_city_2026_jh_001.jpg',
            'https://www.lozano-hemmer.com/image_sets/pulse_garden/mexico_2026/pulse_garden_mexico_city_2026_jh_002.jpg',
            'https://www.lozano-hemmer.com/image_sets/pulse_garden/mexico_2026/pulse_garden_mexico_city_2026_jh_003.jpg',
            ]
        },
        {
            nombre: 'Pulse Topology',
            anio: '2021',
            video: 'https://www.lozano-hemmer.com/videos/artwork/pulse_topology_durham_2023_rlh_001.mp4',
            imagenes: [
            'https://www.lozano-hemmer.com/image_sets/pulse_topology/rome_2024/pulse_topology_rome_2024_bm_001.jpg',
            'https://www.lozano-hemmer.com/image_sets/pulse_topology/rome_2024/pulse_topology_rome_2024_bm_002.jpg',
            'https://www.lozano-hemmer.com/image_sets/pulse_topology/rome_2024/pulse_topology_rome_2024_bm_003.jpg',
            ]
        },
        {
            nombre: 'Encode/Decode',
            anio: '2020',
            video: 'https://www.lozano-hemmer.com/videos/artwork/encode_decode_compilation_2024_rlh_001.mp4',
            imagenes: [
            'https://www.lozano-hemmer.com/image_sets/encodedecode/madrid_2022/encode_decode_madrid_2022_RLH_003.jpg',
            'https://www.lozano-hemmer.com/image_sets/encodedecode/madrid_2022/encode_decode_madrid_2022_cme_001.jpg',
            'https://www.lozano-hemmer.com/image_sets/encodedecode/madrid_2022/encode_decode_madrid_2022_rlh_001.jpg',
            ]
        },
        {
            nombre: 'Recurrent Llull',
            anio: '2019',
            video: '',
            imagenes: [
            'https://www.lozano-hemmer.com/image_sets/recurrent_llull/mexico_city_2025/recurrent_llull_mexico_city_2024_gme_001.jpg',
            'https://www.lozano-hemmer.com/image_sets/recurrent_llull/mexico_city_2025/recurrent_llull_mexico_city_2024_gme_002.jpg',
            'https://www.lozano-hemmer.com/image_sets/recurrent_llull/madrid_2022/recurrent_llull_madrid_2022_cme_027.jpg',
            ]
        }
    ];

    let indiceActual = 0;
    let modoGaleria = false;

    const carrusel = document.querySelector('#carrusel-obras');
    const contenedorArticulos = document.createElement('div');
    contenedorArticulos.classList.add('carrusel-contenedor-articulos');
    
    const btnAnterior = document.querySelector('#obra-anterior');
    const btnSiguiente = document.querySelector('#obra-siguiente');
    const articuloOriginal = document.querySelector('.carrusel-obra');
    
    if (articuloOriginal) {
        carrusel.insertBefore(contenedorArticulos, btnSiguiente);
        contenedorArticulos.appendChild(articuloOriginal);
    }

    const contador = document.querySelector('#carrusel-contador');
    const btnCambiarDiseno = document.querySelector('#btn-cambiar-diseno');

    function renderizarObras() {
        contenedorArticulos.innerHTML = '';
        
        if (modoGaleria) {
            obras.forEach(obra => {
                const article = crearElementoObra(obra);
                contenedorArticulos.appendChild(article);
            });
            btnAnterior.style.display = 'none';
            btnSiguiente.style.display = 'none';
            contador.style.display = 'none';
            carrusel.classList.add('modo-galeria');
        } else {
            const obra = obras[indiceActual];
            const article = crearElementoObra(obra);
            contenedorArticulos.appendChild(article);
            
            btnAnterior.style.display = 'block';
            btnSiguiente.style.display = 'block';
            contador.style.display = 'block';
            carrusel.classList.remove('modo-galeria');
            contador.textContent = `${indiceActual + 1} / ${obras.length}`;
        }
    }

    function crearElementoObra(obra) {
        const article = document.createElement('article');
        article.classList.add('carrusel-obra');
        
        const mediaContainer = document.createElement('div');
        mediaContainer.classList.add('obra-media-scroller');
        
        // Put images first
        if (obra.imagenes && obra.imagenes.length > 0) {
            obra.imagenes.forEach((imgUrl) => {
                const img = document.createElement('img');
                img.loading = "lazy";
                img.src = imgUrl;
                img.alt = `Fotografía de ${obra.nombre}`;
                mediaContainer.appendChild(img);
            });
        }
        
        // Put video inline at the end, as a playable element
        if (obra.video) {
            const video = document.createElement('video');
            video.src = obra.video;
            video.controls = true;
            video.preload = "none";
            // Use the last image as poster so it looks like a thumbnail
            if (obra.imagenes && obra.imagenes.length > 0) {
                video.poster = obra.imagenes[obra.imagenes.length - 1];
            }
            mediaContainer.appendChild(video);
        }
        
        const divInfo = document.createElement('div');
        divInfo.classList.add('carrusel-info');
        
        const h3 = document.createElement('h3');
        h3.textContent = obra.nombre;
        
        const p = document.createElement('p');
        p.textContent = obra.anio;
        
        divInfo.appendChild(h3);
        divInfo.appendChild(p);
        
        article.appendChild(mediaContainer);
        article.appendChild(divInfo);
        
        return article;
    }

    btnAnterior.addEventListener('click', function () {
        indiceActual = (indiceActual - 1 + obras.length) % obras.length;
        renderizarObras();
    });

    btnSiguiente.addEventListener('click', function () {
        indiceActual = (indiceActual + 1) % obras.length;
        renderizarObras();
    });

    btnCambiarDiseno.addEventListener('click', function () {
        modoGaleria = !modoGaleria;
        renderizarObras();
        
        if (modoGaleria) {
            btnCambiarDiseno.textContent = "Ver como carrusel";
        } else {
            btnCambiarDiseno.textContent = "Ver como galería";
        }
    });

    btnCambiarDiseno.textContent = "Ver como galería";
    renderizarObras();
});
