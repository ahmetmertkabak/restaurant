export type BranchMenuCategory = {
  title: string
  items: string[]
}

export type BranchProfile = {
  id: string
  name: string
  address: string
  phone: string
  hours: string
  type: string
  image: string
  socials: {
    facebook?: string
    instagram?: string
    twitter?: string
    email?: string
  }
  menu: {
    title: string
    subtitle: string
    categories: BranchMenuCategory[]
  }
}

export const softBeverages = [
  "Çay",
  "Kahve",
  "Su",
  "Ayran",
  "Kola",
  "Fanta",
  "Soda Çeşitleri",
  "Çamlıca",
  "Enerji İçeceği",
  "Meyve Suları",
  "Limonata",
]

export const branches: BranchProfile[] = [
  {
    id: "sara-coffee",
    name: "Sara Coffee - Harran Üniversitesi",
    address: "Harran Üniversitesi Osmanbey Kampüsü, Şanlıurfa",
    phone: "+90 414 318 3000",
    hours: "09:00 - 22:00",
    type: "Kafe",
    image: "/modern-university-campus-coffee-shop.jpg",
    socials: {
      facebook: "https://www.facebook.com/share/1AB1EvhzsM/?mibextid=wwXIfr",
      instagram: "https://www.instagram.com/hru_sara_coffee?igsh=MWl0bXE1YnIzdGc0bQ==",
      twitter: "https://x.com/hrusaracoffee?s=21",
      email: "hrusaracoffee@gmail.com",
    },
    menu: {
      title: "Sara Coffee Signature Menü",
      subtitle: "Tüm içecek kategorileri + tatlı & pastalar",
      categories: [
        {
          title: "Espresso Beverages",
          items: [
            "Caffe Latte",
            "Cappuccino",
            "Caffe Mocha",
            "White Chocolate Mocha",
            "Caramel Macchiato",
            "Caffe Americano",
            "Espresso",
            "Espresso Macchiato",
          ],
        },
        {
          title: "Filter & Türk Kahvesi",
          items: ["Filter Coffee", "Fresh Filter Coffee", "Türk Kahvesi", "Turkish coffee"],
        },
        {
          title: "Specialty Tea",
          items: ["Specialty Tea", "Herbal teas", "Yeşil Çay", "Ada Çayı", "Ihlamur Çayı", "Kış Çayı", "Hatmi Çayı", "Gül Tomurcuğu Çayı"],
        },
        {
          title: "Sahlep & Sıcaklar",
          items: ["Sahlep", "Damla Sakızlı Sahlep", "Klasik Sahlep", "Hot Chocolate", "Classic Hot Chocolate"],
        },
        {
          title: "Iced Espresso",
          items: [
            "Iced Espresso",
            "Iced Caffe Latte",
            "Iced Caffe Americano",
            "Iced Caramel Macchiato",
            "Iced Caffe Mocha",
            "Iced White Chocolate Mocha",
            "Iced Specialty Tea",
            "Iced Chai Tea Latte",
          ],
        },
        {
          title: "Special İçecekler",
          items: ["Cool Lime", "Berry Hibiscus", "Sara Special"],
        },
        {
          title: "Milkshake",
          items: ["Çilekli Milkshake", "Muzlu Milkshake", "Çikolatalı Milkshake", "Vanilyalı Milkshake"],
        },
        {
          title: "Frappe Koleksiyonu",
          items: ["Klasik Kahve Frappe", "Mocha Frappe", "Caramel Frappe", "Cappuccino Frappe", "Çilekli Frappe", "Muzlu Frappe", "Fındıklı Frappe"],
        },
        {
          title: "Soft İçecekler",
          items: softBeverages,
        },
        {
          title: "Tatlı & Pastalar",
          items: [
            "Tiramisu",
            "Suffle",
            "Belçika Çikolatalı Pasta",
            "Profiterol Pasta",
            "Fıstık Rüyası",
            "Antep Fıstıklı Pasta",
            "Yaban Mersinli Cheesecake",
            "Monalisa",
            "Lady",
          ],
        },
      ],
    },
  },
  {
    id: "sara-restaurant",
    name: "Sara Restaurant - Harran Üniversitesi",
    address: "Harran Üniversitesi Osmanbey Kampüsü, Şanlıurfa",
    phone: "+90 414 318 3001",
    hours: "09:00 - 22:00",
    type: "Restoran",
    image: "/elegant-restaurant-dining-room-fine-dining.jpg",
    socials: {
      facebook: "https://www.facebook.com/share/1CnQAiqYVF/?mibextid=wwXIfr",
      instagram: "https://www.instagram.com/hru_sara_restoran?igsh=ZGdremZjdDl2MjJp",
      twitter: "https://x.com/hrusararestoran?s=21",
      email: "hrusararestaurant@gmail.com",
    },
    menu: {
      title: "Sara Restaurant Menü",
      subtitle: "Gurme yiyecekler ve soft içecek eşleşmeleri",
      categories: [
        {
          title: "Kahvaltılıklar",
          items: ["Çorba", "Kaşarlı Tost", "Sucuklu Tost", "Karışık Tost", "Sebzeli Tost"],
        },
        {
          title: "Tavuk Izgaralar",
          items: ["Tavuk Şiş", "Tavuk Pirzola", "Tavuk Kanat"],
        },
        {
          title: "Şef Sakatat Seçkisi",
          items: ["Ciğer", "Yürek"],
        },
        {
          title: "Gurme Atıştırmalıklar",
          items: ["Patso", "Tavuk Pilav"],
        },
        {
          title: "Soft İçecekler",
          items: softBeverages,
        },
      ],
    },
  },
]


