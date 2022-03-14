let data = {
  manFullName: 'Taki Tachibana',
  manFirstName: 'Taki',
  manFatherName: 'Takaki',
  manMotherName: 'Bana',
  womanFullName: 'Mitsuha Miyamizu',
  womanFirstName: 'Mitsuha',
  womanFatherName: 'Suha',
  womanMotherName: 'Mizu',
  date: 'May 5, 2022 15:37:25',
  akadDate: 'Minggu, 05 May 2022',
  akadTime: '08.00',
  akadPlace: 'Gor Sunter',
  akadAddress:
    'Jl. Taman Tirta Sunter 1 No.9, RT.8/RW.14, Sunter Jaya, Kec. Tj. Priok, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14360',
  resepsiDate: 'Minggu, 05 May 2022',
  resepsiTime: '08.00',
  resepsiPlace: 'Gor Sunter',
  resepsiAddress:
    'Jl. Taman Tirta Sunter 1 No.9, RT.8/RW.14, Sunter Jaya, Kec. Tj. Priok, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14360',
  coverImage: './assets/images/modal-img.png',
  brideImage1: './assets/images/bride-img1.png',
  brideImage2: './assets/images/bride-img2.png',
  brideImage3: './assets/images/bride-img3.png',
  galleries: [
    'https://diazpermana.files.wordpress.com/2016/12/thumb-1920-731745.png',
    'https://assets.pikiran-rakyat.com/crop/70x46:630x418/x/photo/2021/12/17/29280060.jpg',
    'https://ilmupedia.co.id/uploads/article/media_upload/21359/kimi_no_nawa_cover_cr.jpeg',
    'https://p4.wallpaperbetter.com/wallpaper/94/797/206/kimi-no-na-wa-comet-makoto-shinkai-starry-night-wallpaper-preview.jpg',
    'https://nawalakarsa.id/wp-content/uploads/2019/07/kimino-750x422.jpeg',
    'https://obs.line-scdn.net/0haxy9ww33PldEQCjB3udBAHwWMiZ3JiReZiEkOWATYjNvbH1TeCVtNGYTaHs6IilVZHVzODIXYDVvdX8Heg/w644',
  ],
  invitations: [
    {
      id: 1,
      nama: 'Nopal',
      status_buka_undangan: false,
      konfirmasi_kehadiran: '',
      pesan:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 2,
      nama: 'Aspar',
      status_buka_undangan: false,
      konfirmasi_kehadiran: '',
      pesan:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 3,
      nama: 'Rafif',
      status_buka_undangan: false,
      konfirmasi_kehadiran: '',
      pesan:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 4,
      nama: 'Rafif Nabil',
      status_buka_undangan: false,
      konfirmasi_kehadiran: '',
      pesan:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
}

export function getData() {
  return data
}

export function getGuest(nama) {
  return data.invitations.find((invGuest) => invGuest.nama === nama)
}
