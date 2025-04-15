export type Vehicle = {
  id: number
  title: string
  subtitle?: string
  fuel: string
  transmission: string
  mileage: number
  power: {
    kw: number
    ps: number
  }
  year: number
  price: {
    withVat: number
    withoutVat?: number
  }
  date: string
  isNew?: boolean
  isAction?: boolean
  image: string
  images?: string[]
  detailUrl?: string // URL detailu vozidla pre ďalšie scrapovanie
}

export const vehicles: Vehicle[] = [
  {
    id: 21,
    title: "Volkswagen Golf Variant",
    subtitle: "1.4 TSI",
    fuel: "Benzín",
    transmission: "7-st. automatická",
    mileage: 171000,
    power: {
      kw: 92,
      ps: 125,
    },
    year: 2018,
    price: {
      withVat: 11990,
    },
    date: "24.03.2025",
    isNew: true,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8Khtnd1NWLMOP3hat68g8JxXggR5Nm.png",
  },
  {
    id: 12,
    title: "Ford Kuga",
    subtitle: "1.5 EcoBoost Titanium",
    fuel: "Benzín",
    transmission: "8-st. automatická",
    mileage: 171000,
    power: {
      kw: 140,
      ps: 190,
    },
    year: 2020,
    price: {
      withVat: 15500,
    },
    date: "17.03.2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_4-lskuNLMjvGbMuxq5j8azYg0wONAbP5.png",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_4-lskuNLMjvGbMuxq5j8azYg0wONAbP5.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bhoGMIfq5K_fss-0q6TEYznSjqNv1DHORzNERSMwHFGQI.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/o3mTsY9O1_fss-bsuP8UnauivYax4Di92BNkjFQCCgvG.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/w9FEoKJ5Ig_fss-RCjR4xOjZwkXvwsLPW263PNUaDMJoc.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3w0WjZFQj_fss-34qsGOO96wQHigY5qdysQpzycr40jM.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gKiM0WegM_fss-bQyrP1kyagSJ1PPC4HRgeUH1BBPPfY.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/YG1KQYBhk_fss-1UrkIEYo9NnR1J1xbrrmMDoTs2IGkG.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oor4HwA9V_fss-8FzN2pfZgVtuMiJX5RsbwwerbgFF6v.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jnCquUZNvk_fss-l2zflX39iiz8X8Edy0OJsmekxg3c6O.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/j6e2qPa-Au_fss-I5B1NNZuZsotLVL3TfY9UP03dBULQJ.webp",
    ],
  },
  {
    id: 13,
    title: "Peugeot 308 SW",
    subtitle: "2.0 BlueHDi GT Line",
    fuel: "Diesel",
    transmission: "6-st. manuál",
    mileage: 169000,
    power: {
      kw: 96,
      ps: 130,
    },
    year: 2019,
    price: {
      withVat: 6999,
    },
    date: "21.03.2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_8-F2K3S2jSjclax9AnG7bbNCtOkTs1T5.png",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0Pegd4B93_fss-I67gancmKtsiPBEZc1E8F6KUq9IAzy.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B0HUvAfqI_fss-7wf5nXzTKmIjAgfCtbdEimJaTtrVJe.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ctFCRBkzU_fss-XsJSNhO9QvqaG9sKOaeD9R8MlYopuv.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1U9dAeE7fR_fss-2pmH7EdcEmF5Cue0t34gCYNB5x80Z5.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MWQeDe9P9_fss-ARuscJdNrzAAQwIAkOUqddtrVYdFUo.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/I8NBqzCki_fss-bqtRKqsbWOp44J3vRTNZlfcy6NBsM5.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2mGqAJbiz_fss-FCSS9kcJ8Gkcij4mfwst5ZUedx6pdc.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EXA3YyNa19_fss-hm6qoqNeRUo471rbYdsz1FTGHxyMGo.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ic1a-jXoH_fss-N2mtbpPhQZwu6EBTDtE3FHvmBmQeEr.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jPFhfRNn7_fss-u04RW4cr78dAdVRvO4upiAxfVeGLKQ.webp",
    ],
  },
  {
    id: 11,
    title: "Ford Focus Kombi",
    subtitle: "1.5 EcoBoost Titanium",
    fuel: "Benzín",
    transmission: "6-st. manuál",
    mileage: 190000,
    power: {
      kw: 110,
      ps: 150,
    },
    year: 2019,
    price: {
      withVat: 12999,
      withoutVat: 10569,
    },
    date: "01.03.2025",
    isAction: true,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2-KkAAjVLqwLp19z9J4kBSaDeIhrjYCJ.png",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2-KkAAjVLqwLp19z9J4kBSaDeIhrjYCJ.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/-6G31LXs7_fss-ZebLuK7g6JT63kFiS2G8jiQmw7QCvz.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/J6tjQQiE-_fss-9ygUBOEabvF2Rk5IPbe0gHdoKGJLSU.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7o6Bbjx8C_fss-CexypuHhPemy1g1CrL5Z037U7v67kW.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LUvqXGJD_O_fss-4kA08MKoGGymfUmS8zf1RLNIRQxPQ0.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1SkArWUFi6_fss-gHPoRykTIEgzpxPTy1voC4I3mmcXc3.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iNg7o3p2p_fss-AGIc5jVT7aPLRvdUXKa6OSA8oN15z0.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GrCasVDoB_fss-3v6fdQXtxKokN4TP2oD0CDBLZDitlF.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LMElvelSc_fss-SBagdqGjC3FopNIU6mnTbIIAAJBce5.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wfGpV25PAd_fss-ZARCSKfxyNssp1pmGTlC4bXiCOCMp5.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OMxeAhQk__fss-ELsXBW2Yk8QK7r0DU7ssfn9KO1CI44.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WjuCkYn-x_fss-dJevyZwsS2kMeI6miNnOwtLggtWnNW.webp",
    ],
  },
  {
    id: 14,
    title: "Peugeot 5008",
    subtitle: "1.6 BlueHDi Allure",
    fuel: "Diesel",
    transmission: "6-st. manuál",
    mileage: 156000,
    power: {
      kw: 96,
      ps: 130,
    },
    year: 2020,
    price: {
      withVat: 14999,
    },
    date: "10.03.2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_9-pLbr0hyRbVBL0s7a800tfJOOPngHas.png",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_9-pLbr0hyRbVBL0s7a800tfJOOPngHas.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ODabcYrEl_fss-C1BDuPT7FfmlhawyaZKXiArKgnB0qY.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pTt_Vg3S8_fss-AhiMLh6KtsPmgG7yU8xBMsX4qniY4T.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VEGBJGy8Y_fss-YBwl54ZgfThJR1JDRJ46ZDUeDSFpGK.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/r8KYTgEMh_fss-mXoZ74D1OA3eOtn195aD7RKmunEopn.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nMpXRezhth_fss-gXHDDdL6KMGihmmqYHumlLDhJW2OLe.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hhy5WqpTcT_fss-YwVeSHrv8MFOOUDqOTM8MiKX1lv1jM.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/N-NBp_7Co_fss-inneWReXpPW03eMJZqJFzA8zpvFseX.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/maFrvaLGgp_fss-mkAGrLK4VJ083mCXFCwc6c81qTyU64.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Iej6iTg2S2_fss-h3yXl7xM9yamW0a7wKt0JQJ7rI8Fqo.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iNWHNTdwxU_fss-ktpdP5b6a8EOLGw9JaTZWRwmNFvJAt.webp",
    ],
  },
  {
    id: 20,
    title: "Ford Galaxy",
    subtitle: "2.0 TDCi Titanium",
    fuel: "Diesel",
    transmission: "6-st. manuál",
    mileage: 316000,
    power: {
      kw: 120,
      ps: 163,
    },
    year: 2014,
    price: {
      withVat: 5890,
    },
    date: "03.03.2025",
    isNew: true,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_3-9LHISQ0BSwF78FTH1lmH6Q8aeLD2R5.png",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_3-9LHISQ0BSwF78FTH1lmH6Q8aeLD2R5.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gyRGB0JhD_fss-960TT7VPmraWTC9DJrr87c2bkbJPVM.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AS9ZNu27Z_fss-ta63wlW25f4Csrcx8dOGfz7Z15VxPf.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HzgMQ-FnB_fss-JdhzLBtrkCLd7j5nw4rEX8wglCAECI.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/j4T_pJ5JO_fss-h2ZrNUzKLzSPHDw4Na4HfMBRuN6GyV.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iIvTQL2nn_fss-R4wEYVYMERx0tyb5sdZZESWA1MHhp8.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/D_r84nuDP_fss-OgP2x0nb1jjCaQwTqQ3RjuxIGdUXkZ.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/eHTgKmACN_fss-OHSbQKh4C4YlRUki9aUTQxJLmpPSR5.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cHIOvTocV_fss-DTicD4HDzJbz1JF287nxFfIbVSkoee.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ASCz_K86r_fss-Egc86BIRIQYPj9BMAqjFcWm9gC0ocz.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_AYxDD_hb_fss-bddOCDU93jY95s72mmLO7cTSsFS8RS.webp",
    ],
  },
  {
    id: 19,
    title: "Peugeot 3008",
    subtitle: "1.6 BlueHDi Active",
    fuel: "Diesel",
    transmission: "6-st. manuál",
    mileage: 177000,
    power: {
      kw: 84,
      ps: 114,
    },
    year: 2014,
    price: {
      withVat: 6399,
      withoutVat: 5203,
    },
    date: "08.03.2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_7-EcIT0YhHKXfRuuIR8uQYuo7KAtflyu.png",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_7-EcIT0YhHKXfRuuIR8uQYuo7KAtflyu.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gRU6tXVzV_fss-D2opGKNgJPMXWn1kLCQGrhfG9LOD7f.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/-L0U8vpaQ_fss-OxSON404B0Afp2jOmTpZ9J6NQV48K3.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OUnV2OmAf_fss-gS8POa8rPXem4J1oobcMzmjeOZImG5.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IiX97xcD1_fss-wUSEh4C64Ua43dIow9tSIAqRb2ZzKM.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FiwX2daVWW_fss-sSzopMMrJgclA4RlXKho0XZI3MzwaV.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ylgRoHBxVn_fss-sU5CZqzhjdHDDKCt1RyJUQMmbP48jQ.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wnHT_nSuL_fss-ZiJEn0d0OfGPGf0dPky6AISJl33ChY.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/qpK0-Bje9I_fss-gQ14dxIG3VHcaeQyx9Szo1RiqqVSMl.webp",
    ],
  },
  {
    id: 15,
    title: "Mercedes-Benz B",
    subtitle: "180 CDI BlueEFFICIENCY",
    fuel: "Diesel",
    transmission: "6-st. manuál",
    mileage: 255000,
    power: {
      kw: 80,
      ps: 109,
    },
    year: 2012,
    price: {
      withVat: 6999,
    },
    date: "10.03.2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_5-8i8gQS7CdeFD7UilKf4gzHtJrOg1Gp.png",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_5-8i8gQS7CdeFD7UilKf4gzHtJrOg1Gp.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oFFuwHgkL_fss-j3NGoJ6AMAX2gg0PFnCrxEFDd8Km5g.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/29YgdNUpCE_fss-DlkaA4U4G0GZs89lnm3Rnp9ZvgowHk.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ImxnEdPRg_fss-ypvlOuawbcCvsxsRgTVlEmCC4ETPui.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ouxuU7x7F_fss-C0WwwgVaCb0fzfT013PBHNofyc5lzd.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sDB37ls7fb_fss-kl3vo5hTDwBbfAt2mDdskil4Lpi6XG.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DXC6ta_IK_fss-oKpYbpJrIcWV0dqUuSnVIr9BJWraNu.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/u90OYq2swB_fss-NCAa8x3ot3XTjfbuiab3HIdVtm4jGN.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iaRJ-lnTi2_fss-i594lmLzIz8KtdQpe9NMhAU5xuMhDg.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/199R_oObg_fss-RSxZZMmvAgGVkhpLP4yJKE4XBolxj0.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tdQvPhikg_fss-8V94NXpfxYweWSQOeQ5CO3JUtzqwlk.webp",
    ],
  },
  {
    id: 17,
    title: "Citroën C3",
    subtitle: "1.2 PureTech Feel",
    fuel: "Benzín",
    transmission: "5-st. manuál",
    mileage: 65000,
    power: {
      kw: 44,
      ps: 60,
    },
    year: 2011,
    price: {
      withVat: 4000,
    },
    date: "30.01.2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_1-8h1sr9i2Fgp5Pd9uBKQHWVu4pUbsrO.png",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_1-8h1sr9i2Fgp5Pd9uBKQHWVu4pUbsrO.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/citroen-c3-interior-1-Hs8Yd9Nt0Yd9Nt0Yd9Nt.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/citroen-c3-interior-2-Hs8Yd9Nt0Yd9Nt0Yd9Nt.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/citroen-c3-front-Hs8Yd9Nt0Yd9Nt0Yd9Nt.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/citroen-c3-rear-Hs8Yd9Nt0Yd9Nt0Yd9Nt.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/citroen-c3-side-Hs8Yd9Nt0Yd9Nt0Yd9Nt.jpg",
    ],
  },
  {
    id: 16,
    title: "Seat Leon ST",
    subtitle: "2.0 TSI FR",
    fuel: "Benzín",
    transmission: "7-st. automatická",
    mileage: 171000,
    power: {
      kw: 135,
      ps: 184,
    },
    year: 2019,
    price: {
      withVat: 13699,
    },
    date: "19.03.2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_10-GSZjWpimosXD2EamkJ2JAVDn1dHicy.png",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_10-GSZjWpimosXD2EamkJ2JAVDn1dHicy.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VVzRTjv7h5_fss-Aeimnm30fMiKwLo4B5X3tTFg9Hu1K1.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bM2CJfI4WC_fss-apGSn4JX4CedNnNAjMXzPsyVaD8AG1.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6f-9L2Xk_k_fss-krRnrzbSNoA6hE4hFdEgeKtIDelBN1.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fowTFR3Fbu_fss-XnLhqrRdHWvA5ics5V8A0rBNqtkSlQ.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/h1Cyykg58_fss-lEgJsaYvhjDNXkHGxsH6JXe9cSFVQl.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fIH7cO2jP_fss-aIyFaiaw6x1yWYQn7qbDX1DB2C1GWM.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/931zwT7oJ6_fss-aZBTLaj64fWXkdNWMB1jPaNYiJFrSR.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ByCpoWYqN_fss-HqG5828HFSS3lndsTObxkRK3FexXRU.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/D1ETDr2-5_fss-8RIT15Ey5K6nrHN5uUtdvLCuA4FfXK.webp",
    ],
  },
  {
    id: 22,
    title: "Opel Astra Sport Tourer",
    subtitle: "1.6 CDTI Innovation",
    fuel: "Diesel",
    transmission: "6-st. manuál",
    mileage: 160000,
    power: {
      kw: 81,
      ps: 110,
    },
    year: 2017,
    price: {
      withVat: 6999,
    },
    date: "24.03.2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/opel-astra-st-Hs8Yd9Nt0Yd9Nt0Yd9Nt.jpg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/opel-astra-st-Hs8Yd9Nt0Yd9Nt0Yd9Nt.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/qrcWwbHaX3_fss-QXWu7MS2EQjNe4402R3kEjZvpqpz5q.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CRXHR6NkE_fss-qqAnXdOdjh0MVgmXq9ynsbb65HwrLU.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DHUCPXC1N7_fss-v97vNZbAtQXK6GdL1BcuRkXHy7Uinz.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oKLkKEO-hU_fss-9VQsCGUtTP0nKjPWInt9wySn2vPP8c.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bQxTE49gPp_fss-ajsNtqiJTyXcjy4xdXGLJ3qh8c7oPV.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OOpkc5pfI_fss-oiLXmsS8melZEqYU4s6le9BMAkHPNk.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/I1K52vlBCr_fss-8ZbuU544JSUTaTYQANoZqxx2AC1ivi.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lOOvRkebN__fss-hsxaf73pQrwtFexGy9SndLY3cauh5U.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kiiXEkKaS_fss-QARGDywVsIZjMxJETUxJynhG84CeAO.webp",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DUwpe_xFS_fss-CtjqEmcYIZG2E6Rj07D7OdS7MYhjyK.webp",
    ],
  },
  {
    id: 23,
    title: "Seat Ateca",
    subtitle: "2.0 TDI",
    fuel: "Diesel",
    transmission: "7-st. automatická",
    mileage: 135000,
    power: {
      kw: 110,
      ps: 150,
    },
    year: 2022,
    price: {
      withVat: 19990,
    },
    date: "25.03.2025",
    isNew: true,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6gKB1-QeiE_fss-fDBKaVSLX4yyve2Pd8wLmsgbxs1Yba.webp",
  },
  {
    id: 24,
    title: "Seat Ateca",
    subtitle: "2.0 TDI",
    fuel: "Diesel",
    transmission: "6-st. manuálna",
    mileage: 176000,
    power: {
      kw: 110,
      ps: 150,
    },
    year: 2018,
    price: {
      withVat: 15990,
    },
    date: "25.03.2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6gKB1-QeiE_fss-fDBKaVSLX4yyve2Pd8wLmsgbxs1Yba.webp",
  },
  {
    id: 25,
    title: "Seat Leon SP",
    subtitle: "2.0 TDI",
    fuel: "Diesel",
    transmission: "6-st. manuálna",
    mileage: 170000,
    power: {
      kw: 85,
      ps: 115,
    },
    year: 2022,
    price: {
      withVat: 17990,
    },
    date: "25.03.2025",
    image: "/placeholder.svg?height=600&width=800&text=Seat%20Leon%20SP%202022",
  },
  {
    id: 26,
    title: "Škoda Octavia Combi 2.0 TDI SCR Style DSG",
    subtitle: "2.0 TDI SCR, 110 kW",
    fuel: "Diesel",
    transmission: "7-st. automatická (DSG)",
    mileage: 160000,
    power: {
      kw: 110,
      ps: 150,
    },
    year: 2020,
    price: {
      withVat: 16990,
    },
    date: "25.03.2025",
    image: "/placeholder.svg?height=600&width=800&text=Škoda%20Octavia%20Combi%202020",
  },
  {
    id: 27,
    title: "Škoda Octavia Combi 2.0 TDI Style EU6",
    subtitle: "2.0 TDI, 110 kW",
    fuel: "Diesel",
    transmission: "6-st. manuálna",
    mileage: 177000,
    power: {
      kw: 110,
      ps: 150,
    },
    year: 2018,
    price: {
      withVat: 14990,
    },
    date: "25.03.2025",
    image: "/placeholder.svg?height=600&width=800&text=Škoda%20Octavia%20Combi%202018",
  },
  {
    id: 28,
    title: "Škoda Octavia Combi 2.0 TDI Style DSG",
    subtitle: "2.0 TDI, 110 kW",
    fuel: "Diesel",
    transmission: "6-st. automatická (DSG)",
    mileage: 165000,
    power: {
      kw: 110,
      ps: 150,
    },
    year: 2019,
    price: {
      withVat: 15990,
    },
    date: "25.03.2025",
    image: "/placeholder.svg?height=600&width=800&text=Škoda%20Octavia%20Combi%202019",
  },
  {
    id: 29,
    title: "Škoda Superb Combi 1.5 TSI ACT Style",
    subtitle: "1.5 TSI ACT, 110 kW",
    fuel: "Benzín",
    transmission: "6-st. manuálna",
    mileage: 149900,
    power: {
      kw: 110,
      ps: 150,
    },
    year: 2020,
    price: {
      withVat: 18990,
    },
    date: "25.03.2025",
    image: "/placeholder.svg?height=600&width=800&text=Škoda%20Superb%20Combi%202020",
  },
  {
    id: 30,
    title: "Škoda Superb Combi 2.0 TDI Business DSG",
    subtitle: "2.0 TDI, 110 kW",
    fuel: "Diesel",
    transmission: "6-st. automatická (DSG)",
    mileage: 193000,
    power: {
      kw: 110,
      ps: 150,
    },
    year: 2019,
    price: {
      withVat: 17990,
    },
    date: "25.03.2025",
    image: "/placeholder.svg?height=600&width=800&text=Škoda%20Superb%20Combi%202019",
  },
  {
    id: 31,
    title: "Volkswagen T-Roc",
    subtitle: "1.5 TSI",
    fuel: "Benzín",
    transmission: "6-st. manuálna",
    mileage: 187000,
    power: {
      kw: 110,
      ps: 150,
    },
    year: 2020,
    price: {
      withVat: 16990,
    },
    date: "25.03.2025",
    image: "/placeholder.svg?height=600&width=800&text=Volkswagen%20T-Roc%202020",
  },
]

export const companyInfo = {
  name: "Auto Skalický",
  address: {
    street: "Čingov 873/110",
    city: "Močenok",
    country: "Slovakia",
  },
  contact: {
    email: "info@autoskalicky.sk",
    phone: {
      sales: "+421 915 742 062",
      service: "+421 908 158 441",
    },
    salesPerson: "Dávid Skalický",
    servicePerson: "Roman Skalický",
  },
  openingHours: {
    weekdays: "9:00 - 17:00",
    saturday: "9:00 - 12:00",
    sunday: "Zatvorené",
  },
  website: "autoskalicky.sk",
}

export const faqItems = [
  {
    question: "Aké služby ponúkate v rámci autoservisu?",
    answer:
      "Naše služby zahŕňajú pneuservis, autoservis, tepovanie a leštenie. Naši skúsení mechanici sú pripravení zabezpečiť, aby vaše vozidlo bolo vždy v najlepšom stave.",
  },
  {
    question: "Ako si môžem dohodnúť stretnutie na opravu vozidla?",
    answer:
      'Stretnutie si môžete dohodnúť jednoducho kliknutím na tlačidlo "Dohodnite si stretnutie" na našej webovej stránke, alebo nám zavolajte.',
  },
  {
    question: "Čo mám robiť, ak moje auto potrebuje odťah?",
    answer:
      "Ak potrebujete odťahovú službu, kontaktujte nás okamžite. Naša odťahová služba je k dispozícii, aby vám pomohla v prípade núdze a zabezpečila rýchly a bezpečný transport vášho vozidla do nášho servisu.",
  },
  {
    question: "Aké možnosti financovania ponúkate?",
    answer:
      "Ponúkame výhodné financovanie vozidiel na splátky s akontáciou už od 0%, bez skrytých poplatkov a s možnosťou predčasného splatenia bez poplatkov. Doba splácania je flexibilná až do 96 mesiacov.",
  },
  {
    question: "Poskytujete poistenie vozidiel?",
    answer:
      "Áno, ponúkame komplexné poistenie vozidiel vrátane zákonného a havarijného poistenia. Spolupracujeme s 15 poisťovňami, aby sme vám mohli ponúknuť najvýhodnejšie podmienky.",
  },
]

export const services = {
  primary: [
    {
      title: "Predaj vozidiel",
      description: "Široká ponuka kvalitných vozidiel z Nemecka s kompletnou servisnou históriou.",
    },
    {
      title: "Dovoz vozidiel",
      description: "Dovoz vozidiel na objednávku podľa vašich požiadaviek.",
    },
    {
      title: "Odťahová služba",
      description: "Rýchla a spoľahlivá odťahová služba v prípade poruchy alebo nehody.",
    },
  ],
  repair: [
    {
      title: "Pneuservis",
      description: "Kompletný pneuservis vrátane prezutia, vyváženia a opravy pneumatík.",
    },
    {
      title: "Tepovanie",
      description: "Profesionálne tepovanie interiéru vozidla s použitím kvalitných čistiacich prostriedkov.",
    },
    {
      title: "Leštenie",
      description: "Leštenie karosérie a renovácia laku pre dokonalý vzhľad vášho vozidla.",
    },
  ],
}

export const financingInfo = {
  title: "Financovanie vozidla na splátky a kompletné poistenie vozidla",
  subtitle: "Vybavíme vám ten najvýhodnejší auto-úver na trhu aj na počkanie.",
  features: [
    "Akontácia už od 0%",
    "Bez skrytých poplatkov",
    "Doba splácania až do 96% (s možnosťou predčasného splatenia bez poplatkov)",
    "Možnosť úveru aj na motorky, skútre a štvorkolky",
  ],
  callToAction: "Neváhajte nás kontaktovať a my vám radi vypracujeme ponuku na mieru podľa vašich požiadaviek",
}
