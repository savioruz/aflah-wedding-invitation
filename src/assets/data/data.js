export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Aflah Roid Fadhil',
            child: 'Putra pertama',
            father: 'Sutarman',
            mother: 'Rumini',
            image: './src/assets/images/cowo.png'
        },
        P: {
            id: 2,
            name: 'Lena Mariyanti',
            child: 'Putri kedua',
            father: 'Ngadiyono',
            mother: 'Turni',
            image: './src/assets/images/cewe.png'
        },

        couple: './src/assets/images/couple.png'
    },

    time: {
        marriage: {
            year: '2025',
            month: 'Desember',
            date: '14',
            day: 'Minggu',
            hours: {
                start: '07.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2025',
            month: 'Desember',
            date: '15',
            day: 'Senin',
            hours: {
                start: '09.00',
                finish: 'Selesai'
            }
        },
        ngunduh_mantu: {
            year: '2025',
            month: 'Desember',
            date: '18',
            day: 'Kamis',
            hours: {
                start: '08.00',
                finish: 'Selesai'
            }
        },

        address: 'Waru 002/003, Walitelon Selatan, Kab. Temanggung, Jawa Tengah',
        address_ngunduh_mantu: 'Gondangwayang Ngisor, Kedu, Kab. Temanggung, Jawa Tengah'
    },

    link: {
        calendar: 'https://calendar.app.google/hXmPYm2ExpkCpW867',
        map_reception: 'https://maps.app.goo.gl/HbiQNuLcRDsaH4FU8',
        map_ngunduh_mantu: 'https://maps.app.goo.gl/DHVMsnQHtsoMu8xE8'
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.png'
        },
        {
            id: 2,
            image: './src/assets/images/2.png'
        },
        {
            id: 3,
            image: './src/assets/images/3.png'
        },
        {
            id: 4,
            image: './src/assets/images/4.png'
        },
        {
            id: 5,
            image: './src/assets/images/5.png'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'LENA MARIYANTI',
            icon: './src/assets/images/bca.png',
            rekening: '1540740859'
        },
        {
            id: 2,
            name: 'AFLAH ROID FADHIL',
            icon: './src/assets/images/mandiri.png',
            rekening: '1760004248504'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbxCaU2CZZGCCZaB7eeHev4a5uSlyz9_kFtrZHn6sDebYz87cgg4pXSLzaBQ7QP5Mm9ONA/exec',

    navbar: [
        {
            id: 1,
            teks: 'Beranda',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
