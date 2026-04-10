import { University } from '../types';

export const universities: University[] = [
  {
    id: 'hcmut',
    name: 'Đại học Bách Khoa - ĐHQG TP.HCM',
    code: 'QSB',
    location: 'TP.HCM',
    region: 'miền Nam',
    tuition: 30000000,
    website: 'https://hcmut.edu.vn',
    description: 'Trường đại học kỹ thuật hàng đầu tại miền Nam Việt Nam.',
    majors: [
      {
        id: 'hcmut-it',
        name: 'Khoa học Máy tính',
        code: '7480101',
        admissionScore: { '2020': 27.25, '2021': 28.0, '2022': 28.0, '2023': 28.0, '2024': 27.5 },
        description: 'Đào tạo chuyên sâu về thuật toán, phần mềm và trí tuệ nhân tạo.',
        careerOpportunities: ['Kỹ sư phần mềm', 'Chuyên gia AI', 'Phát triển Web'],
        category: 'Máy tính và công nghệ thông tin',
        isHot: true
      },
      {
        id: 'hcmut-me',
        name: 'Kỹ thuật Cơ khí',
        code: '7520103',
        admissionScore: { '2020': 24.0, '2021': 24.5, '2022': 24.5, '2023': 24.5, '2024': 25.0 },
        description: 'Thiết kế, chế tạo và vận hành các hệ thống máy móc.',
        careerOpportunities: ['Kỹ sư cơ khí', 'Quản lý sản xuất'],
        category: 'Kỹ thuật',
        isHot: false
      },
      {
        id: 'hcmut-auto',
        name: 'Công nghệ Kỹ thuật Ô tô',
        code: '7510205',
        admissionScore: { '2020': 26.0, '2021': 27.0, '2022': 26.5, '2023': 26.0, '2024': 26.2 },
        description: 'Thiết kế, chế tạo và bảo trì các hệ thống ô tô hiện đại.',
        careerOpportunities: ['Kỹ sư ô tô', 'Quản lý xưởng dịch vụ'],
        category: 'Kỹ thuật',
        isHot: true
      },
      {
        id: 'hcmut-aero',
        name: 'Kỹ thuật Hàng không',
        code: '7520120',
        admissionScore: { '2020': 25.0, '2021': 26.0, '2022': 25.5, '2023': 25.0, '2024': 25.5 },
        description: 'Thiết kế, chế tạo và bảo dưỡng máy bay và thiết bị bay.',
        careerOpportunities: ['Kỹ sư hàng không', 'Chuyên viên bảo dưỡng máy bay'],
        category: 'Kỹ thuật',
        isHot: true
      },
      {
        id: 'hcmut-heat',
        name: 'Kỹ thuật Nhiệt',
        code: '7520115',
        admissionScore: { '2020': 22.0, '2021': 23.0, '2022': 22.5, '2023': 22.0, '2024': 22.5 },
        description: 'Nghiên cứu về các hệ thống nhiệt, lạnh và năng lượng tái tạo.',
        careerOpportunities: ['Kỹ sư nhiệt lạnh', 'Thiết kế hệ thống HVAC'],
        category: 'Kỹ thuật',
        isHot: false
      },
      {
        id: 'hcmut-petro',
        name: 'Kỹ thuật Dầu khí',
        code: '7520604',
        admissionScore: { '2020': 23.0, '2021': 24.0, '2022': 23.5, '2023': 23.0, '2024': 23.5 },
        description: 'Khai thác và chế biến dầu mỏ, khí đốt.',
        careerOpportunities: ['Kỹ sư dầu khí', 'Chuyên viên khoan thăm dò'],
        category: 'Kỹ thuật',
        isHot: false
      },
      {
        id: 'hcmut-geo',
        name: 'Kỹ thuật Địa chất',
        code: '7520501',
        admissionScore: { '2020': 18.0, '2021': 19.0, '2022': 18.5, '2023': 18.0, '2024': 18.5 },
        description: 'Nghiên cứu cấu trúc trái đất phục vụ xây dựng và khai khoáng.',
        careerOpportunities: ['Kỹ sư địa chất', 'Thăm dò khoáng sản'],
        category: 'Kỹ thuật',
        isHot: false
      },
      {
        id: 'hcmut-sur',
        name: 'Kỹ thuật Trắc địa - Bản đồ',
        code: '7520503',
        admissionScore: { '2020': 18.0, '2021': 19.0, '2022': 18.5, '2023': 18.0, '2024': 18.0 },
        description: 'Đo đạc và lập bản đồ bề mặt trái đất.',
        careerOpportunities: ['Kỹ sư trắc địa', 'Chuyên viên GIS'],
        category: 'Kỹ thuật',
        isHot: false
      },
      {
        id: 'hcmut-ship',
        name: 'Kỹ thuật Tàu thủy',
        code: '7520122',
        admissionScore: { '2020': 18.0, '2021': 19.0, '2022': 18.5, '2023': 18.0, '2024': 18.2 },
        description: 'Thiết kế và đóng mới các loại tàu thủy, phương tiện nổi.',
        careerOpportunities: ['Kỹ sư đóng tàu', 'Giám định viên hàng hải'],
        category: 'Kỹ thuật',
        isHot: false
      }
    ]
  },
  {
    id: 'ueh',
    name: 'Đại học Kinh tế TP.HCM',
    code: 'UEH',
    location: 'TP.HCM',
    region: 'miền Nam',
    tuition: 45000000,
    website: 'https://ueh.edu.vn',
    description: 'Trường trọng điểm quốc gia về đào tạo kinh tế, quản lý và luật.',
    majors: [
      {
        id: 'ueh-mkt',
        name: 'Marketing',
        code: '7340115',
        admissionScore: { '2020': 26.5, '2021': 27.0, '2022': 27.5, '2023': 27.2, '2024': 27.8 },
        description: 'Nghiên cứu thị trường, hành vi người dùng và chiến lược thương hiệu.',
        careerOpportunities: ['Chuyên viên Marketing', 'Quản trị thương hiệu'],
        category: 'Kinh doanh và quản lý',
        isHot: true
      },
      {
        id: 'ueh-fin',
        name: 'Tài chính - Ngân hàng',
        code: '7340201',
        admissionScore: { '2020': 25.0, '2021': 25.5, '2022': 26.0, '2023': 26.5, '2024': 26.0 },
        description: 'Quản lý tài chính doanh nghiệp, đầu tư và nghiệp vụ ngân hàng.',
        careerOpportunities: ['Chuyên viên tài chính', 'Giao dịch viên ngân hàng'],
        category: 'Kinh doanh và quản lý',
        isHot: true
      },
      {
        id: 'ueh-ecom',
        name: 'Thương mại điện tử',
        code: '7340122',
        admissionScore: { '2020': 26.0, '2021': 27.2, '2022': 27.5, '2023': 27.0, '2024': 27.5 },
        description: 'Kinh doanh trên nền tảng số và quản trị hệ thống thương mại điện tử.',
        careerOpportunities: ['Chuyên viên TMĐT', 'Quản trị sàn TMĐT'],
        category: 'Kinh doanh và quản lý',
        isHot: true
      }
    ]
  },
  {
    id: 'hust',
    name: 'Đại học Bách Khoa Hà Nội',
    code: 'BKA',
    location: 'Hà Nội',
    region: 'miền Bắc',
    tuition: 28000000,
    website: 'https://hust.edu.vn',
    description: 'Trường đại học kỹ thuật đa ngành hàng đầu Việt Nam.',
    majors: [
      {
        id: 'hust-it1',
        name: 'Khoa học Máy tính (IT1)',
        code: 'IT1',
        admissionScore: { '2020': 29.04, '2021': 29.2, '2022': 29.5, '2023': 29.42, '2024': 29.0 },
        description: 'Chương trình đào tạo tinh hoa về CNTT.',
        careerOpportunities: ['Kỹ sư phần mềm cao cấp', 'Nhà khoa học dữ liệu'],
        category: 'Máy tính và công nghệ thông tin',
        isHot: true
      },
      {
        id: 'hust-mat',
        name: 'Công nghệ Vật liệu',
        code: '7510402',
        admissionScore: { '2020': 24.0, '2021': 25.0, '2022': 24.5, '2023': 24.0, '2024': 24.2 },
        description: 'Nghiên cứu và phát triển các loại vật liệu mới.',
        careerOpportunities: ['Kỹ sư vật liệu', 'Chuyên viên R&D'],
        category: 'Kỹ thuật',
        isHot: false
      },
      {
        id: 'hust-aero',
        name: 'Kỹ thuật Hàng không',
        code: '7520120',
        admissionScore: { '2020': 26.0, '2021': 27.0, '2022': 26.5, '2023': 26.0, '2024': 26.5 },
        description: 'Thiết kế và bảo dưỡng máy bay, thiết bị bay.',
        careerOpportunities: ['Kỹ sư hàng không', 'Chuyên viên bảo dưỡng'],
        category: 'Kỹ thuật',
        isHot: true
      },
      {
        id: 'hust-tex',
        name: 'Kỹ thuật Dệt',
        code: '7540202',
        admissionScore: { '2020': 20.0, '2021': 21.0, '2022': 20.5, '2023': 20.0, '2024': 20.5 },
        description: 'Công nghệ sản xuất sợi và vải.',
        careerOpportunities: ['Kỹ sư dệt', 'Quản lý chất lượng dệt may'],
        category: 'Kỹ thuật',
        isHot: false
      },
      {
        id: 'hust-shoe',
        name: 'Kỹ thuật Da giày',
        code: '7540206',
        admissionScore: { '2020': 19.0, '2021': 20.0, '2022': 19.5, '2023': 19.0, '2024': 19.5 },
        description: 'Công nghệ sản xuất giày dép và sản phẩm da.',
        careerOpportunities: ['Kỹ sư da giày', 'Thiết kế mẫu giày'],
        category: 'Kỹ thuật',
        isHot: false
      },
      {
        id: 'hust-bme',
        name: 'Kỹ thuật Y sinh',
        code: '7520212',
        admissionScore: { '2020': 25.0, '2021': 26.0, '2022': 25.5, '2023': 25.0, '2024': 25.5 },
        description: 'Ứng dụng kỹ thuật trong y tế và chăm sóc sức khỏe.',
        careerOpportunities: ['Kỹ sư y sinh', 'Quản lý thiết bị y tế'],
        category: 'Kỹ thuật',
        isHot: true
      },
      {
        id: 'hust-env',
        name: 'Kỹ thuật Môi trường',
        code: '7520320',
        admissionScore: { '2020': 22.0, '2021': 23.0, '2022': 22.5, '2023': 22.0, '2024': 22.5 },
        description: 'Giải quyết các vấn đề ô nhiễm và bảo vệ môi trường.',
        careerOpportunities: ['Kỹ sư môi trường', 'Tư vấn môi trường'],
        category: 'Kỹ thuật',
        isHot: false
      },
      {
        id: 'hust-print',
        name: 'Kỹ thuật In',
        code: '7510403',
        admissionScore: { '2020': 21.0, '2021': 22.0, '2022': 21.5, '2023': 21.0, '2024': 21.5 },
        description: 'Công nghệ và quy trình sản xuất in ấn.',
        careerOpportunities: ['Kỹ sư in', 'Quản lý sản xuất in'],
        category: 'Kỹ thuật',
        isHot: false
      },
      {
        id: 'hust-dyn',
        name: 'Kỹ thuật Cơ khí động lực',
        code: '7520116',
        admissionScore: { '2020': 23.0, '2021': 24.0, '2022': 23.5, '2023': 23.0, '2024': 23.5 },
        description: 'Nghiên cứu các hệ thống động lực và máy xây dựng.',
        careerOpportunities: ['Kỹ sư cơ khí động lực', 'Thiết kế máy'],
        category: 'Kỹ thuật',
        isHot: false
      },
      {
        id: 'hust-micro',
        name: 'Kỹ thuật Vi điện tử và Công nghệ nano',
        code: '7520203',
        admissionScore: { '2020': 26.0, '2021': 27.0, '2022': 26.5, '2023': 26.0, '2024': 26.5 },
        description: 'Thiết kế và chế tạo các linh kiện vi điện tử và vật liệu nano.',
        careerOpportunities: ['Kỹ sư bán dẫn', 'Chuyên gia công nghệ nano'],
        category: 'Kỹ thuật',
        isHot: true
      }
    ]
  },
  {
    id: 'neu',
    name: 'Đại học Kinh tế Quốc dân',
    code: 'KHA',
    location: 'Hà Nội',
    region: 'miền Bắc',
    tuition: 20000000,
    website: 'https://neu.edu.vn',
    description: 'Trường đào tạo kinh tế và quản trị hàng đầu miền Bắc.',
    majors: [
      {
        id: 'neu-kt',
        name: 'Kinh tế quốc tế',
        code: '7310106',
        admissionScore: { '2020': 27.75, '2021': 28.25, '2022': 28.1, '2023': 28.0, '2024': 28.5 },
        description: 'Đào tạo chuyên gia về kinh tế toàn cầu.',
        careerOpportunities: ['Chuyên viên kinh tế', 'Nghiên cứu thị trường'],
        category: 'Khoa học xã hội và hành vi',
        isHot: true
      },
      {
        id: 'neu-qtkd',
        name: 'Quản trị kinh doanh',
        code: '7340101',
        admissionScore: { '2020': 26.5, '2021': 27.5, '2022': 27.0, '2023': 27.2, '2024': 27.0 },
        description: 'Kỹ năng quản trị và điều hành doanh nghiệp.',
        careerOpportunities: ['Quản lý dự án', 'Khởi nghiệp'],
        category: 'Kinh doanh và quản lý',
        isHot: true
      }
    ]
  },
  {
    id: 'hmu',
    name: 'Đại học Y Hà Nội',
    code: 'YHB',
    location: 'Hà Nội',
    region: 'miền Bắc',
    tuition: 55000000,
    website: 'https://hmu.edu.vn',
    description: 'Trường đào tạo y khoa danh giá nhất Việt Nam.',
    majors: [
      {
        id: 'hmu-yk',
        name: 'Y khoa',
        code: '7720101',
        admissionScore: { '2020': 28.9, '2021': 28.85, '2022': 28.15, '2023': 27.73, '2024': 28.2 },
        description: 'Đào tạo bác sĩ đa khoa trình độ cao.',
        careerOpportunities: ['Bác sĩ đa khoa', 'Nghiên cứu y học'],
        category: 'Sức khoẻ',
        isHot: true
      }
    ]
  },
  {
    id: 'uarch',
    name: 'Đại học Kiến trúc TP.HCM',
    code: 'UAH',
    location: 'TP.HCM',
    region: 'miền Nam',
    tuition: 15000000,
    website: 'https://uah.edu.vn',
    description: 'Trường đào tạo kiến trúc và thiết kế hàng đầu.',
    majors: [
      {
        id: 'uarch-kt',
        name: 'Kiến trúc',
        code: '7580101',
        admissionScore: { '2020': 25.5, '2021': 26.0, '2022': 25.8, '2023': 25.5, '2024': 25.0 },
        description: 'Thiết kế công trình và không gian sống.',
        careerOpportunities: ['Kiến trúc sư', 'Thiết kế nội thất'],
        category: 'Kiến trúc và xây dựng',
        isHot: true
      },
      {
        id: 'uarch-tkdh',
        name: 'Thiết kế đồ họa',
        code: '7210403',
        admissionScore: { '2020': 24.5, '2021': 25.5, '2022': 25.2, '2023': 25.0, '2024': 25.5 },
        description: 'Sáng tạo hình ảnh và truyền thông thị giác.',
        careerOpportunities: ['Designer', 'Art Director'],
        category: 'Nghệ thuật',
        isHot: true
      },
      {
        id: 'uarch-id',
        name: 'Thiết kế Công nghiệp',
        code: '7210402',
        admissionScore: { '2020': 22.0, '2021': 23.5, '2022': 23.0, '2023': 22.5, '2024': 23.0 },
        description: 'Thiết kế hình dáng và công năng của các sản phẩm gia dụng, công nghiệp.',
        careerOpportunities: ['Product Designer', 'Thiết kế kiểu dáng công nghiệp'],
        category: 'Nghệ thuật',
        isHot: true
      },
      {
        id: 'uarch-up',
        name: 'Quy hoạch vùng và đô thị',
        code: '7580105',
        admissionScore: { '2020': 21.0, '2021': 22.5, '2022': 22.0, '2023': 21.5, '2024': 21.8 },
        description: 'Thiết kế và quản lý không gian đô thị, nông thôn.',
        careerOpportunities: ['Kiến trúc sư quy hoạch', 'Quản lý đô thị'],
        category: 'Kiến trúc và xây dựng',
        isHot: false
      },
      {
        id: 'uarch-water',
        name: 'Kỹ thuật Cấp thoát nước',
        code: '7580211',
        admissionScore: { '2020': 18.0, '2021': 19.0, '2022': 18.5, '2023': 18.0, '2024': 18.5 },
        description: 'Thiết kế và vận hành hệ thống cung cấp và xử lý nước.',
        careerOpportunities: ['Kỹ sư cấp thoát nước', 'Tư vấn hạ tầng'],
        category: 'Kiến trúc và xây dựng',
        isHot: false
      },
      {
        id: 'uarch-infra',
        name: 'Kỹ thuật Cơ sở hạ tầng',
        code: '7580210',
        admissionScore: { '2020': 18.0, '2021': 19.0, '2022': 18.5, '2023': 18.0, '2024': 18.0 },
        description: 'Quy hoạch và thiết kế hạ tầng kỹ thuật đô thị.',
        careerOpportunities: ['Kỹ sư hạ tầng', 'Quản lý đô thị'],
        category: 'Kiến trúc và xây dựng',
        isHot: false
      }
    ]
  },
  {
    id: 'ussh',
    name: 'Đại học KHXH&NV - ĐHQG TP.HCM',
    code: 'QSX',
    location: 'TP.HCM',
    region: 'miền Nam',
    tuition: 20000000,
    website: 'https://hcmussh.edu.vn',
    description: 'Trung tâm đào tạo khoa học xã hội lớn nhất miền Nam.',
    majors: [
      {
        id: 'ussh-bc',
        name: 'Báo chí',
        code: '7320101',
        admissionScore: { '2020': 27.5, '2021': 28.0, '2022': 28.25, '2023': 28.0, '2024': 28.5 },
        description: 'Đào tạo phóng viên, biên tập viên chuyên nghiệp.',
        careerOpportunities: ['Phóng viên', 'Biên tập viên', 'PR'],
        category: 'Báo chí và thông tin',
        isHot: true
      },
      {
        id: 'ussh-nn',
        name: 'Ngôn ngữ Anh',
        code: '7220201',
        admissionScore: { '2020': 26.0, '2021': 27.0, '2022': 26.5, '2023': 26.8, '2024': 27.2 },
        description: 'Sử dụng thành thạo tiếng Anh trong nhiều lĩnh vực.',
        careerOpportunities: ['Biên dịch viên', 'Giảng viên tiếng Anh'],
        category: 'Nhân văn',
        isHot: true
      },
      {
        id: 'ussh-hn',
        name: 'Hán Nôm',
        code: '7220104',
        admissionScore: { '2020': 20.0, '2021': 21.0, '2022': 20.5, '2023': 20.0, '2024': 20.0 },
        description: 'Nghiên cứu ngôn ngữ và văn hóa Hán Nôm cổ.',
        careerOpportunities: ['Nghiên cứu viên văn hóa', 'Lưu trữ viên'],
        category: 'Nhân văn',
        isHot: false
      },
      {
        id: 'ussh-lt',
        name: 'Lưu trữ học',
        code: '7320303',
        admissionScore: { '2020': 21.0, '2021': 22.0, '2022': 21.5, '2023': 21.0, '2024': 21.2 },
        description: 'Quản lý và bảo tồn các tài liệu lưu trữ.',
        careerOpportunities: ['Lưu trữ viên', 'Quản lý hồ sơ'],
        category: 'Báo chí và thông tin',
        isHot: false
      },
      {
        id: 'ussh-ctxh',
        name: 'Công tác xã hội',
        code: '7760101',
        admissionScore: { '2020': 22.0, '2021': 23.5, '2022': 23.0, '2023': 22.5, '2024': 23.0 },
        description: 'Hỗ trợ cá nhân và cộng đồng giải quyết các vấn đề xã hội.',
        careerOpportunities: ['Nhân viên xã hội', 'Quản lý dự án cộng đồng'],
        category: 'Dịch vụ xã hội',
        isHot: true
      },
      {
        id: 'ussh-vnh',
        name: 'Việt Nam học',
        code: '7220101',
        admissionScore: { '2020': 23.0, '2021': 24.5, '2022': 24.0, '2023': 23.8, '2024': 24.5 },
        description: 'Nghiên cứu toàn diện về đất nước và con người Việt Nam.',
        careerOpportunities: ['Hướng dẫn viên du lịch', 'Nghiên cứu viên văn hóa'],
        category: 'Nhân văn',
        isHot: true
      }
    ]
  },
  {
    id: 'ftu',
    name: 'Đại học Ngoại thương',
    code: 'NTH',
    location: 'Hà Nội & TP.HCM',
    region: 'miền Bắc',
    tuition: 25000000,
    website: 'https://ftu.edu.vn',
    description: 'Trường đại học hàng đầu về kinh tế và ngoại thương tại Việt Nam.',
    majors: [
      {
        id: 'ftu-ktdn',
        name: 'Kinh tế đối ngoại',
        code: '7310101',
        admissionScore: { '2020': 28.6, '2021': 28.8, '2022': 28.4, '2023': 28.5, '2024': 28.2 },
        description: 'Đào tạo chuyên gia về thương mại quốc tế và đầu tư.',
        careerOpportunities: ['Chuyên viên xuất nhập khẩu', 'Phân tích đầu tư'],
        category: 'Kinh doanh và quản lý',
        isHot: true
      },
      {
        id: 'ftu-log',
        name: 'Logistics và Quản lý chuỗi cung ứng',
        code: '7510605',
        admissionScore: { '2020': 28.0, '2021': 28.5, '2022': 28.2, '2023': 28.3, '2024': 28.0 },
        description: 'Quản lý vận chuyển, kho bãi và dòng chảy hàng hóa.',
        careerOpportunities: ['Quản lý chuỗi cung ứng', 'Chuyên viên Logistics'],
        category: 'Kinh doanh và quản lý',
        isHot: true
      }
    ]
  },
  {
    id: 'hlu',
    name: 'Đại học Luật Hà Nội',
    code: 'LPH',
    location: 'Hà Nội',
    region: 'miền Bắc',
    tuition: 18000000,
    website: 'https://hlu.edu.vn',
    description: 'Trường đào tạo luật lớn nhất Việt Nam.',
    majors: [
      {
        id: 'hlu-lkt',
        name: 'Luật kinh tế',
        code: '7380107',
        admissionScore: { '2020': 27.0, '2021': 28.0, '2022': 27.5, '2023': 27.2, '2024': 27.5 },
        description: 'Kiến thức pháp luật trong hoạt động kinh doanh.',
        careerOpportunities: ['Luật sư doanh nghiệp', 'Pháp chế'],
        category: 'Pháp luật',
        isHot: true
      }
    ]
  },
  {
    id: 'hnue',
    name: 'Đại học Sư phạm Hà Nội',
    code: 'SPH',
    location: 'Hà Nội',
    tuition: 0, // Miễn học phí theo quy định nhà nước cho sư phạm
    website: 'https://hnue.edu.vn',
    description: 'Trường đại học sư phạm trọng điểm quốc gia.',
    majors: [
      {
        id: 'hnue-math',
        name: 'Sư phạm Toán học',
        code: '7140209',
        admissionScore: { '2020': 26.0, '2021': 27.5, '2022': 27.0, '2023': 26.5, '2024': 26.8 },
        description: 'Đào tạo giáo viên Toán cho các trường THPT.',
        careerOpportunities: ['Giáo viên Toán', 'Nghiên cứu giáo dục'],
        category: 'Khoa học giáo dục và đào tạo giáo viên',
        isHot: true
      },
      {
        id: 'hnue-eng',
        name: 'Sư phạm Tiếng Anh',
        code: '7140231',
        admissionScore: { '2020': 27.0, '2021': 28.0, '2022': 28.5, '2023': 28.2, '2024': 28.0 },
        description: 'Đào tạo giáo viên Tiếng Anh chất lượng cao.',
        careerOpportunities: ['Giáo viên Tiếng Anh', 'Biên dịch viên'],
        category: 'Khoa học giáo dục và đào tạo giáo viên',
        isHot: true
      },
      {
        id: 'hnue-psy',
        name: 'Tâm lý học giáo dục',
        code: '7310403',
        admissionScore: { '2020': 25.0, '2021': 26.5, '2022': 26.0, '2023': 25.8, '2024': 26.2 },
        description: 'Nghiên cứu tâm lý trong môi trường giáo dục.',
        careerOpportunities: ['Chuyên gia tâm lý học đường', 'Tư vấn giáo dục'],
        category: 'Khoa học xã hội và hành vi',
        isHot: true
      }
    ]
  },
  {
    id: 'ctu',
    name: 'Đại học Cần Thơ',
    code: 'TCT',
    location: 'Cần Thơ',
    tuition: 15000000,
    website: 'https://ctu.edu.vn',
    description: 'Trường đại học đa ngành lớn nhất vùng Đồng bằng sông Cửu Long.',
    majors: [
      {
        id: 'ctu-ntts',
        name: 'Nuôi trồng thủy sản',
        code: '7620301',
        admissionScore: { '2020': 18.0, '2021': 19.0, '2022': 20.0, '2023': 19.5, '2024': 20.0 },
        description: 'Kỹ thuật nuôi và quản lý các loài thủy sản.',
        careerOpportunities: ['Kỹ sư thủy sản', 'Quản lý trang trại'],
        category: 'Nông, lâm nghiệp và thủy sản',
        isHot: false
      },
      {
        id: 'ctu-cntp',
        name: 'Công nghệ thực phẩm',
        code: '7540101',
        admissionScore: { '2020': 22.0, '2021': 23.0, '2022': 24.0, '2023': 23.5, '2024': 23.0 },
        description: 'Chế biến và bảo quản nông sản, thực phẩm.',
        careerOpportunities: ['Kỹ sư thực phẩm', 'Quản lý chất lượng (QA/QC)'],
        category: 'Sản xuất và chế biến',
        isHot: true
      },
      {
        id: 'ctu-ntts-2',
        name: 'Nuôi trồng thủy sản',
        code: '7620301',
        admissionScore: { '2020': 15.0, '2021': 16.0, '2022': 16.0, '2023': 15.0, '2024': 15.5 },
        description: 'Kỹ thuật nuôi và quản lý các loài thủy sản.',
        careerOpportunities: ['Kỹ sư thủy sản', 'Quản lý trang trại nuôi tôm'],
        category: 'Nông, lâm nghiệp và thủy sản',
        isHot: true
      },
      {
        id: 'ctu-cnrqcq',
        name: 'Công nghệ rau quả và cảnh quan',
        code: '7620113',
        admissionScore: { '2020': 15.0, '2021': 15.0, '2022': 15.0, '2023': 15.0, '2024': 15.0 },
        description: 'Kỹ thuật trồng rau quả và thiết kế cảnh quan nông nghiệp.',
        careerOpportunities: ['Kỹ sư nông nghiệp', 'Thiết kế cảnh quan'],
        category: 'Nông, lâm nghiệp và thủy sản',
        isHot: false
      }
    ]
  },
  {
    id: 'dut',
    name: 'Đại học Bách khoa - ĐH Đà Nẵng',
    code: 'DDK',
    location: 'Đà Nẵng',
    tuition: 25000000,
    website: 'http://dut.udn.vn',
    description: 'Trường đại học kỹ thuật hàng đầu miền Trung.',
    majors: [
      {
        id: 'dut-ee',
        name: 'Kỹ thuật Điện',
        code: '7520201',
        admissionScore: { '2020': 23.0, '2021': 24.0, '2022': 23.5, '2023': 24.0, '2024': 23.8 },
        description: 'Hệ thống điện, năng lượng tái tạo và thiết bị điện.',
        careerOpportunities: ['Kỹ sư điện', 'Thiết kế hệ thống điện'],
        category: 'Kỹ thuật',
        isHot: false
      },
      {
        id: 'dut-xd',
        name: 'Kỹ thuật Xây dựng',
        code: '7580201',
        admissionScore: { '2020': 20.0, '2021': 21.0, '2022': 20.5, '2023': 21.0, '2024': 20.0 },
        description: 'Thiết kế và thi công các công trình dân dụng, công nghiệp.',
        careerOpportunities: ['Kỹ sư xây dựng', 'Giám sát công trình'],
        category: 'Kiến trúc và xây dựng',
        isHot: false
      }
    ]
  },
  {
    id: 'nlu',
    name: 'Đại học Nông Lâm TP.HCM',
    code: 'NLS',
    location: 'TP.HCM',
    tuition: 15000000,
    website: 'https://hcmuaf.edu.vn',
    description: 'Trường đào tạo nông lâm nghiệp hàng đầu miền Nam.',
    majors: [
      {
        id: 'nlu-ty',
        name: 'Thú y',
        code: '7640101',
        admissionScore: { '2020': 24.5, '2021': 26.0, '2022': 25.5, '2023': 25.0, '2024': 25.2 },
        description: 'Chăm sóc sức khỏe động vật và phòng chống dịch bệnh.',
        careerOpportunities: ['Bác sĩ thú y', 'Quản lý trang trại chăn nuôi'],
        category: 'Thú y',
        isHot: true
      },
      {
        id: 'nlu-qldd',
        name: 'Quản lý đất đai',
        code: '7850103',
        admissionScore: { '2020': 21.0, '2021': 22.0, '2022': 21.5, '2023': 21.0, '2024': 21.0 },
        description: 'Quy hoạch, quản lý và sử dụng tài nguyên đất.',
        careerOpportunities: ['Cán bộ địa chính', 'Quy hoạch đô thị'],
        category: 'Môi trường và bảo vệ môi trường',
        isHot: false
      },
      {
        id: 'nlu-wood',
        name: 'Kỹ thuật Gỗ và Nội thất',
        code: '7540106',
        admissionScore: { '2020': 18.0, '2021': 19.0, '2022': 18.5, '2023': 18.0, '2024': 18.5 },
        description: 'Công nghệ chế biến gỗ và thiết kế sản phẩm nội thất.',
        careerOpportunities: ['Kỹ sư chế biến gỗ', 'Thiết kế nội thất'],
        category: 'Sản xuất và chế biến',
        isHot: false
      }
    ]
  },
  {
    id: 'tdtu',
    name: 'Đại học Tôn Đức Thắng',
    code: 'DTT',
    location: 'TP.HCM',
    tuition: 40000000,
    website: 'https://tdtu.edu.vn',
    description: 'Trường đại học công lập hiện đại và năng động.',
    majors: [
      {
        id: 'tdtu-ks',
        name: 'Quản trị khách sạn',
        code: '7810201',
        admissionScore: { '2020': 25.0, '2021': 26.5, '2022': 26.0, '2023': 25.5, '2024': 25.8 },
        description: 'Quản lý và vận hành các cơ sở lưu trú cao cấp.',
        careerOpportunities: ['Quản lý khách sạn', 'Tổ chức sự kiện'],
        category: 'Du lịch, khách sạn, thể thao và dịch vụ cá nhân',
        isHot: true
      },
      {
        id: 'tdtu-tktt',
        name: 'Thiết kế thời trang',
        code: '7210404',
        admissionScore: { '2020': 23.0, '2021': 24.0, '2022': 24.5, '2023': 24.0, '2024': 24.2 },
        description: 'Sáng tạo trang phục và phụ kiện thời trang.',
        careerOpportunities: ['Nhà thiết kế thời trang', 'Stylist'],
        category: 'Nghệ thuật',
        isHot: true
      }
    ]
  },
  {
    id: 'fptu',
    name: 'Đại học FPT',
    code: 'FPT',
    location: 'Toàn quốc',
    tuition: 80000000,
    website: 'https://fpt.edu.vn',
    description: 'Trường đại học trong lòng doanh nghiệp, chú trọng thực hành.',
    majors: [
      {
        id: 'fptu-se',
        name: 'Kỹ thuật phần mềm',
        code: '7480103',
        admissionScore: { '2020': 21.0, '2021': 21.0, '2022': 21.0, '2023': 21.0, '2024': 21.0 }, // FPT thường xét học bạ/thi riêng
        description: 'Quy trình phát triển phần mềm chuyên nghiệp.',
        careerOpportunities: ['Lập trình viên', 'Tester', 'Solution Architect'],
        category: 'Máy tính và công nghệ thông tin',
        isHot: true
      },
      {
        id: 'fptu-attt',
        name: 'An toàn thông tin',
        code: '7480202',
        admissionScore: { '2020': 21.0, '2021': 21.0, '2022': 21.0, '2023': 21.0, '2024': 21.0 },
        description: 'Bảo mật hệ thống và phòng chống tấn công mạng.',
        careerOpportunities: ['Chuyên gia bảo mật', 'Security Analyst'],
        category: 'Máy tính và công nghệ thông tin',
        isHot: true
      }
    ]
  },
  {
    id: 'hcmus',
    name: 'Đại học Khoa học Tự nhiên - ĐHQG TP.HCM',
    code: 'QST',
    location: 'TP.HCM',
    tuition: 25000000,
    website: 'https://hcmus.edu.vn',
    description: 'Trường đào tạo khoa học cơ bản hàng đầu miền Nam.',
    majors: [
      {
        id: 'hcmus-cnsh',
        name: 'Công nghệ Sinh học',
        code: '7420201',
        admissionScore: { '2020': 25.0, '2021': 26.0, '2022': 25.5, '2023': 25.0, '2024': 24.8 },
        description: 'Ứng dụng sinh học trong y dược, nông nghiệp và môi trường.',
        careerOpportunities: ['Nghiên cứu viên sinh học', 'Kỹ sư sinh học'],
        category: 'Khoa học sự sống',
        isHot: true
      },
      {
        id: 'hcmus-hh',
        name: 'Hóa học',
        code: '7440112',
        admissionScore: { '2020': 23.0, '2021': 24.0, '2022': 23.5, '2023': 23.0, '2024': 22.5 },
        description: 'Nghiên cứu cấu tạo và tính chất của các chất.',
        careerOpportunities: ['Kỹ sư hóa học', 'Kiểm nghiệm viên'],
        category: 'Khoa học tự nhiên',
        isHot: false
      },
      {
        id: 'hcmus-nuc',
        name: 'Kỹ thuật Hạt nhân',
        code: '7520402',
        admissionScore: { '2020': 20.0, '2021': 21.0, '2022': 20.5, '2023': 20.0, '2024': 20.0 },
        description: 'Nghiên cứu về năng lượng hạt nhân và ứng dụng bức xạ.',
        careerOpportunities: ['Kỹ sư hạt nhân', 'Chuyên gia an toàn bức xạ'],
        category: 'Kỹ thuật',
        isHot: false
      },
      {
        id: 'hcmus-ocean',
        name: 'Hải dương học',
        code: '7440202',
        admissionScore: { '2020': 19.0, '2021': 20.0, '2022': 19.5, '2023': 19.0, '2024': 19.0 },
        description: 'Nghiên cứu về biển và đại dương.',
        careerOpportunities: ['Nhà hải dương học', 'Chuyên viên môi trường biển'],
        category: 'Khoa học tự nhiên',
        isHot: false
      }
    ]
  },
  {
    id: 'ulis',
    name: 'Đại học Ngoại ngữ - ĐHQG Hà Nội',
    code: 'QHF',
    location: 'Hà Nội',
    tuition: 20000000,
    website: 'https://ulis.vnu.edu.vn',
    description: 'Trường đào tạo ngoại ngữ hàng đầu Việt Nam.',
    majors: [
      {
        id: 'ulis-ja',
        name: 'Ngôn ngữ Nhật',
        code: '7220209',
        admissionScore: { '2020': 34.5, '2021': 36.0, '2022': 35.5, '2023': 35.0, '2024': 35.2 }, // Thang điểm 40
        description: 'Sử dụng thành thạo tiếng Nhật và hiểu biết văn hóa Nhật.',
        careerOpportunities: ['Biên dịch viên tiếng Nhật', 'Làm việc tại cty Nhật'],
        category: 'Nhân văn',
        isHot: true
      }
    ]
  },
  {
    id: 'ump',
    name: 'Đại học Y Dược TP.HCM',
    code: 'YDS',
    location: 'TP.HCM',
    tuition: 70000000,
    website: 'https://ump.edu.vn',
    description: 'Trường đào tạo y dược hàng đầu miền Nam.',
    majors: [
      {
        id: 'ump-yk',
        name: 'Y khoa',
        code: '7720101',
        admissionScore: { '2020': 28.45, '2021': 28.2, '2022': 27.55, '2023': 27.34, '2024': 27.8 },
        description: 'Đào tạo bác sĩ đa khoa có kiến thức và kỹ năng chuyên môn cao.',
        careerOpportunities: ['Bác sĩ đa khoa', 'Bác sĩ chuyên khoa'],
        category: 'Sức khoẻ',
        isHot: true
      },
      {
        id: 'ump-rhm',
        name: 'Răng Hàm Mặt',
        code: '7720501',
        admissionScore: { '2020': 28.0, '2021': 27.65, '2022': 27.0, '2023': 26.96, '2024': 27.3 },
        description: 'Đào tạo bác sĩ chuyên khoa Răng Hàm Mặt.',
        careerOpportunities: ['Bác sĩ nha khoa', 'Phẫu thuật hàm mặt'],
        category: 'Sức khoẻ',
        isHot: true
      },
      {
        id: 'ump-rehab',
        name: 'Kỹ thuật Phục hồi chức năng',
        code: '7720603',
        admissionScore: { '2020': 24.0, '2021': 25.0, '2022': 24.5, '2023': 24.0, '2024': 24.5 },
        description: 'Hỗ trợ bệnh nhân hồi phục chức năng vận động.',
        careerOpportunities: ['Kỹ thuật viên phục hồi chức năng', 'Làm việc tại BV'],
        category: 'Sức khoẻ',
        isHot: true
      },
      {
        id: 'ump-img',
        name: 'Kỹ thuật Hình ảnh y học',
        code: '7720602',
        admissionScore: { '2020': 23.0, '2021': 24.0, '2022': 23.5, '2023': 23.0, '2024': 23.5 },
        description: 'Vận hành các thiết bị chẩn đoán hình ảnh y khoa.',
        careerOpportunities: ['Kỹ thuật viên hình ảnh', 'Làm việc tại phòng X-quang, MRI'],
        category: 'Sức khoẻ',
        isHot: true
      },
      {
        id: 'ump-lab',
        name: 'Kỹ thuật Xét nghiệm y học',
        code: '7720601',
        admissionScore: { '2020': 25.0, '2021': 26.0, '2022': 25.5, '2023': 25.0, '2024': 25.5 },
        description: 'Thực hiện các xét nghiệm y khoa phục vụ chẩn đoán.',
        careerOpportunities: ['Kỹ thuật viên xét nghiệm', 'Nghiên cứu y sinh'],
        category: 'Sức khoẻ',
        isHot: true
      }
    ]
  },
  {
    id: 'hcmute',
    name: 'Đại học Sư phạm Kỹ thuật TP.HCM',
    code: 'SPK',
    location: 'TP.HCM',
    tuition: 30000000,
    website: 'https://hcmute.edu.vn',
    description: 'Trường đào tạo kỹ thuật và sư phạm kỹ thuật hàng đầu.',
    majors: [
      {
        id: 'hcmute-me',
        name: 'Kỹ thuật Cơ điện tử',
        code: '7520114',
        admissionScore: { '2020': 25.5, '2021': 26.75, '2022': 26.0, '2023': 25.8, '2024': 26.0 },
        description: 'Sự kết hợp giữa cơ khí, điện tử và điều khiển máy tính.',
        careerOpportunities: ['Kỹ sư cơ điện tử', 'Kỹ sư tự động hóa'],
        category: 'Kỹ thuật',
        isHot: true
      },
      {
        id: 'hcmute-ac',
        name: 'Kỹ thuật Điều khiển và Tự động hóa',
        code: '7520216',
        admissionScore: { '2020': 26.0, '2021': 27.25, '2022': 26.5, '2023': 26.2, '2024': 26.5 },
        description: 'Thiết kế và vận hành các hệ thống tự động trong công nghiệp.',
        careerOpportunities: ['Kỹ sư tự động hóa', 'Kỹ sư hệ thống'],
        category: 'Kỹ thuật',
        isHot: true
      },
      {
        id: 'hcmute-print',
        name: 'Kỹ thuật In',
        code: '7510403',
        admissionScore: { '2020': 21.0, '2021': 22.0, '2022': 21.5, '2023': 21.0, '2024': 21.2 },
        description: 'Công nghệ và quy trình sản xuất các sản phẩm in ấn.',
        careerOpportunities: ['Kỹ sư in', 'Quản lý sản xuất in'],
        category: 'Kỹ thuật',
        isHot: false
      },
      {
        id: 'hcmute-ktdl',
        name: 'Kỹ thuật dữ liệu',
        code: '7480109',
        admissionScore: { '2020': 24.0, '2021': 25.0, '2022': 26.0, '2023': 25.5, '2024': 26.0 },
        description: 'Thu thập, xử lý và phân tích dữ liệu quy mô lớn.',
        careerOpportunities: ['Kỹ sư dữ liệu', 'Chuyên viên phân tích'],
        category: 'Máy tính và công nghệ thông tin',
        isHot: true
      },
      {
        id: 'hcmute-robot',
        name: 'Robot và trí tuệ nhân tạo',
        code: '7520216',
        admissionScore: { '2020': 25.0, '2021': 26.0, '2022': 27.0, '2023': 26.5, '2024': 27.0 },
        description: 'Thiết kế và phát triển các hệ thống robot thông minh.',
        careerOpportunities: ['Kỹ sư Robot', 'Chuyên gia AI'],
        category: 'Kỹ thuật',
        isHot: true
      }
    ]
  },
  {
    id: 'buh',
    name: 'Đại học Ngân hàng TP.HCM',
    code: 'NHS',
    location: 'TP.HCM',
    tuition: 20000000,
    website: 'https://buh.edu.vn',
    description: 'Trường đào tạo chuyên sâu về tài chính, ngân hàng.',
    majors: [
      {
        id: 'buh-tcnb',
        name: 'Tài chính - Ngân hàng',
        code: '7340201',
        admissionScore: { '2020': 25.25, '2021': 26.25, '2022': 25.8, '2023': 25.5, '2024': 25.7 },
        description: 'Kiến thức về quản lý tài chính, nghiệp vụ ngân hàng hiện đại.',
        careerOpportunities: ['Nhân viên ngân hàng', 'Chuyên viên tài chính'],
        category: 'Kinh doanh và quản lý',
        isHot: true
      },
      {
        id: 'buh-mis',
        name: 'Hệ thống thông tin quản lý',
        code: '7340405',
        admissionScore: { '2020': 24.5, '2021': 25.5, '2022': 25.0, '2023': 24.8, '2024': 25.0 },
        description: 'Ứng dụng CNTT trong quản lý kinh doanh.',
        careerOpportunities: ['Business Analyst', 'Quản trị hệ thống'],
        category: 'Máy tính và công nghệ thông tin',
        isHot: true
      }
    ]
  },
  {
    id: 'ufm',
    name: 'Đại học Tài chính - Marketing',
    code: 'DMS',
    location: 'TP.HCM',
    tuition: 25000000,
    website: 'https://ufm.edu.vn',
    description: 'Trường đào tạo chuyên sâu về Marketing và Tài chính.',
    majors: [
      {
        id: 'ufm-mkt',
        name: 'Marketing',
        code: '7340115',
        admissionScore: { '2020': 26.1, '2021': 27.1, '2022': 26.7, '2023': 26.5, '2024': 26.8 },
        description: 'Nghiên cứu thị trường và phát triển thương hiệu.',
        careerOpportunities: ['Chuyên viên Marketing', 'Quản trị thương hiệu'],
        category: 'Kinh doanh và quản lý',
        isHot: true
      },
      {
        id: 'ufm-ib',
        name: 'Kinh doanh quốc tế',
        code: '7340120',
        admissionScore: { '2020': 25.8, '2021': 26.8, '2022': 26.4, '2023': 26.2, '2024': 26.5 },
        description: 'Hoạt động kinh doanh và thương mại xuyên biên giới.',
        careerOpportunities: ['Chuyên viên xuất nhập khẩu', 'Kinh doanh quốc tế'],
        category: 'Kinh doanh và quản lý',
        isHot: true
      },
      {
        id: 'ufm-mar',
        name: 'Marketing',
        code: '7340115',
        admissionScore: { '2020': 24.0, '2021': 25.0, '2022': 26.0, '2023': 25.0, '2024': 25.5 },
        description: 'Nghiên cứu thị trường và phát triển thương hiệu.',
        careerOpportunities: ['Chuyên viên Marketing', 'Quản lý nhãn hàng'],
        category: 'Kinh doanh và quản lý',
        isHot: true
      },
      {
        id: 'ufm-bds',
        name: 'Bất động sản',
        code: '7340116',
        admissionScore: { '2020': 20.0, '2021': 21.0, '2022': 22.0, '2023': 21.0, '2024': 21.5 },
        description: 'Quản lý, kinh doanh và định giá bất động sản.',
        careerOpportunities: ['Chuyên viên bất động sản', 'Nhà môi giới'],
        category: 'Kinh doanh và quản lý',
        isHot: false
      }
    ]
  },
  {
    id: 'sgu',
    name: 'Đại học Sài Gòn',
    code: 'SGD',
    location: 'TP.HCM',
    tuition: 15000000,
    website: 'https://sgu.edu.vn',
    description: 'Trường đại học đa ngành có truyền thống lâu đời.',
    majors: [
      {
        id: 'sgu-spth',
        name: 'Sư phạm Tiểu học',
        code: '7140202',
        admissionScore: { '2020': 24.0, '2021': 25.5, '2022': 25.0, '2023': 24.8, '2024': 25.2 },
        description: 'Đào tạo giáo viên giảng dạy bậc tiểu học.',
        careerOpportunities: ['Giáo viên tiểu học', 'Cán bộ quản lý giáo dục'],
        category: 'Khoa học giáo dục và đào tạo giáo viên',
        isHot: true
      },
      {
        id: 'sgu-it',
        name: 'Công nghệ thông tin',
        code: '7480201',
        admissionScore: { '2020': 24.5, '2021': 25.75, '2022': 25.2, '2023': 25.0, '2024': 25.3 },
        description: 'Đào tạo kỹ sư CNTT đa năng.',
        careerOpportunities: ['Lập trình viên', 'Quản trị mạng'],
        category: 'Máy tính và công nghệ thông tin',
        isHot: true
      }
    ]
  },
  {
    id: 'hsu',
    name: 'Đại học Hoa Sen',
    code: 'DHS',
    location: 'TP.HCM',
    tuition: 60000000,
    website: 'https://hoasen.edu.vn',
    description: 'Trường đại học tư thục chú trọng tính ứng dụng và quốc tế.',
    majors: [
      {
        id: 'hsu-ks',
        name: 'Quản trị khách sạn',
        code: '7810201',
        admissionScore: { '2020': 18.0, '2021': 18.0, '2022': 18.0, '2023': 18.0, '2024': 18.0 },
        description: 'Đào tạo quản lý trong ngành dịch vụ hiếu khách.',
        careerOpportunities: ['Quản lý khách sạn', 'Quản lý nhà hàng'],
        category: 'Du lịch, khách sạn, thể thao và dịch vụ cá nhân',
        isHot: true
      },
      {
        id: 'hsu-tkdh',
        name: 'Thiết kế đồ họa',
        code: '7210403',
        admissionScore: { '2020': 18.0, '2021': 18.0, '2022': 18.0, '2023': 18.0, '2024': 18.0 },
        description: 'Sáng tạo nội dung hình ảnh và truyền thông.',
        careerOpportunities: ['Designer', 'Art Director'],
        category: 'Nghệ thuật',
        isHot: true
      }
    ]
  },
  {
    id: 'ou',
    name: 'Đại học Mở TP.HCM',
    code: 'MBS',
    location: 'TP.HCM',
    tuition: 25000000,
    website: 'https://ou.edu.vn',
    description: 'Trường đại học công lập đa ngành với hình thức đào tạo linh hoạt.',
    majors: [
      {
        id: 'ou-cnsh',
        name: 'Công nghệ sinh học',
        code: '7420201',
        admissionScore: { '2020': 20.0, '2021': 21.5, '2022': 21.0, '2023': 20.5, '2024': 20.8 },
        description: 'Ứng dụng sinh học trong sản xuất và đời sống.',
        careerOpportunities: ['Kỹ sư sinh học', 'Nghiên cứu viên'],
        category: 'Khoa học sự sống',
        isHot: false
      },
      {
        id: 'ou-l',
        name: 'Luật',
        code: '7380101',
        admissionScore: { '2020': 23.5, '2021': 24.5, '2022': 24.0, '2023': 23.8, '2024': 24.2 },
        description: 'Kiến thức pháp luật đại cương và chuyên sâu.',
        careerOpportunities: ['Luật sư', 'Tư vấn pháp lý'],
        category: 'Pháp luật',
        isHot: true
      }
    ]
  },
  {
    id: 'iuh',
    name: 'Đại học Công nghiệp TP.HCM',
    code: 'HUI',
    location: 'TP.HCM',
    tuition: 28000000,
    website: 'https://iuh.edu.vn',
    description: 'Trường đào tạo kỹ thuật và công nghiệp hàng đầu.',
    majors: [
      {
        id: 'iuh-hh',
        name: 'Công nghệ kỹ thuật hóa học',
        code: '7510401',
        admissionScore: { '2020': 21.0, '2021': 22.5, '2022': 22.0, '2023': 21.5, '2024': 21.8 },
        description: 'Ứng dụng hóa học trong quy trình sản xuất công nghiệp.',
        careerOpportunities: ['Kỹ sư hóa học', 'Quản lý sản xuất'],
        category: 'Kỹ thuật',
        isHot: false
      },
      {
        id: 'iuh-qtkd',
        name: 'Quản trị kinh doanh',
        code: '7340101',
        admissionScore: { '2020': 23.0, '2021': 24.5, '2022': 24.0, '2023': 23.5, '2024': 24.0 },
        description: 'Kỹ năng quản trị và điều hành doanh nghiệp.',
        careerOpportunities: ['Quản lý kinh doanh', 'Khởi nghiệp'],
        category: 'Kinh doanh và quản lý',
        isHot: true
      },
      {
        id: 'iuh-tex',
        name: 'Công nghệ Dệt, May',
        code: '7540204',
        admissionScore: { '2020': 20.0, '2021': 21.5, '2022': 21.0, '2023': 20.5, '2024': 20.8 },
        description: 'Quy trình sản xuất sợi, dệt vải và may mặc công nghiệp.',
        careerOpportunities: ['Kỹ sư dệt may', 'Quản lý chất lượng may mặc'],
        category: 'Sản xuất và chế biến',
        isHot: false
      }
    ]
  },
  {
    id: 'ptit',
    name: 'Học viện Công nghệ Bưu chính Viễn thông',
    code: 'BVH',
    location: 'Hà Nội & TP.HCM',
    tuition: 30000000,
    website: 'https://ptit.edu.vn',
    description: 'Trường đào tạo chuyên sâu về viễn thông và CNTT.',
    majors: [
      {
        id: 'ptit-cndpt',
        name: 'Công nghệ đa phương tiện',
        code: '7480110',
        admissionScore: { '2020': 25.5, '2021': 26.5, '2022': 26.2, '2023': 26.0, '2024': 26.3 },
        description: 'Kết hợp giữa CNTT và thiết kế đồ họa.',
        careerOpportunities: ['Phát triển game', 'Thiết kế đồ họa'],
        category: 'Máy tính và công nghệ thông tin',
        isHot: true
      },
      {
        id: 'ptit-ttdpt',
        name: 'Truyền thông đa phương tiện',
        code: '7320104',
        admissionScore: { '2020': 26.0, '2021': 27.0, '2022': 26.8, '2023': 26.5, '2024': 26.9 },
        description: 'Sáng tạo nội dung truyền thông trên nhiều nền tảng.',
        careerOpportunities: ['Chuyên viên truyền thông', 'Sản xuất nội dung'],
        category: 'Báo chí và thông tin',
        isHot: true
      }
    ]
  },
  {
    id: 'iu',
    name: 'Đại học Quốc tế - ĐHQG TP.HCM',
    code: 'QSV',
    location: 'TP.HCM',
    tuition: 50000000,
    website: 'https://hcmiu.edu.vn',
    description: 'Trường đại học công lập giảng dạy hoàn toàn bằng tiếng Anh.',
    majors: [
      {
        id: 'iu-qtkd',
        name: 'Quản trị kinh doanh',
        code: '7340101',
        admissionScore: { '2020': 24.0, '2021': 25.5, '2022': 25.0, '2023': 24.5, '2024': 25.0 },
        description: 'Đào tạo nhà quản lý trong môi trường quốc tế.',
        careerOpportunities: ['Quản lý kinh doanh', 'Chuyên viên tài chính'],
        category: 'Kinh doanh và quản lý',
        isHot: true
      },
      {
        id: 'iu-log',
        name: 'Logistics và Quản lý chuỗi cung ứng',
        code: '7510605',
        admissionScore: { '2020': 25.0, '2021': 26.5, '2022': 26.0, '2023': 25.5, '2024': 25.8 },
        description: 'Quản lý dòng chảy hàng hóa và dịch vụ toàn cầu.',
        careerOpportunities: ['Quản lý chuỗi cung ứng', 'Chuyên viên Logistics'],
        category: 'Kinh doanh và quản lý',
        isHot: true
      },
      {
        id: 'iu-space',
        name: 'Kỹ thuật Không gian',
        code: '7520121',
        admissionScore: { '2020': 18.0, '2021': 19.0, '2022': 18.5, '2023': 18.0, '2024': 18.0 },
        description: 'Nghiên cứu về vệ tinh, viễn thám và công nghệ không gian.',
        careerOpportunities: ['Kỹ sư công nghệ không gian', 'Chuyên viên viễn thám'],
        category: 'Kỹ thuật',
        isHot: false
      }
    ]
  },
  {
    id: 'ut',
    name: 'Đại học Giao thông vận tải',
    code: 'GHA',
    location: 'Hà Nội & TP.HCM',
    tuition: 18000000,
    website: 'https://utc.edu.vn',
    description: 'Trường đào tạo hàng đầu về giao thông vận tải.',
    majors: [
      {
        id: 'ut-ship',
        name: 'Kỹ thuật Tàu thủy',
        code: '7520122',
        admissionScore: { '2020': 18.0, '2021': 19.0, '2022': 18.5, '2023': 18.0, '2024': 18.2 },
        description: 'Thiết kế, đóng mới và sửa chữa các loại tàu thủy.',
        careerOpportunities: ['Kỹ sư đóng tàu', 'Giám định viên hàng hải'],
        category: 'Kỹ thuật',
        isHot: false
      }
    ]
  },
  {
    id: 'hcmuc',
    name: 'Đại học Văn hóa TP.HCM',
    code: 'VHS',
    location: 'TP.HCM',
    tuition: 12000000,
    website: 'https://hcmuc.edu.vn',
    description: 'Trường đào tạo chuyên sâu về văn hóa và nghệ thuật.',
    majors: [
      {
        id: 'hcmuc-mus',
        name: 'Bảo tàng học',
        code: '7320305',
        admissionScore: { '2020': 18.0, '2021': 19.0, '2022': 18.5, '2023': 18.0, '2024': 18.0 },
        description: 'Nghiên cứu, bảo tồn và trưng bày các di sản văn hóa.',
        careerOpportunities: ['Cán bộ bảo tàng', 'Quản lý di sản'],
        category: 'Báo chí và thông tin',
        isHot: false
      },
      {
        id: 'hcmuc-cm',
        name: 'Quản lý văn hóa',
        code: '7229042',
        admissionScore: { '2020': 20.0, '2021': 21.5, '2022': 21.0, '2023': 20.5, '2024': 21.0 },
        description: 'Tổ chức và quản lý các hoạt động văn hóa, nghệ thuật.',
        careerOpportunities: ['Quản lý văn hóa', 'Tổ chức sự kiện văn hóa'],
        category: 'Nhân văn',
        isHot: true
      }
    ]
  },
  {
    id: 'hcmunre',
    name: 'Đại học Tài nguyên và Môi trường TP.HCM',
    code: 'DTM',
    location: 'TP.HCM',
    tuition: 15000000,
    website: 'https://hcmunre.edu.vn',
    description: 'Trường đào tạo chuyên sâu về tài nguyên và môi trường.',
    majors: [
      {
        id: 'hcmunre-met',
        name: 'Khí tượng và khí hậu học',
        code: '7440221',
        admissionScore: { '2020': 16.0, '2021': 17.0, '2022': 16.5, '2023': 16.0, '2024': 16.0 },
        description: 'Dự báo thời tiết và nghiên cứu biến đổi khí hậu.',
        careerOpportunities: ['Dự báo viên khí tượng', 'Nghiên cứu khí hậu'],
        category: 'Khoa học tự nhiên',
        isHot: false
      },
      {
        id: 'hcmunre-hyd',
        name: 'Thủy văn học',
        code: '7440224',
        admissionScore: { '2020': 16.0, '2021': 17.0, '2022': 16.5, '2023': 16.0, '2024': 16.0 },
        description: 'Nghiên cứu về sự vận động và chất lượng của nước.',
        careerOpportunities: ['Chuyên viên thủy văn', 'Quản lý tài nguyên nước'],
        category: 'Khoa học tự nhiên',
        isHot: false
      }
    ]
  },
  {
    id: 'humg',
    name: 'Đại học Mỏ - Địa chất',
    code: 'MDA',
    location: 'Hà Nội',
    tuition: 15000000,
    website: 'https://humg.edu.vn',
    description: 'Trường đào tạo hàng đầu về mỏ, địa chất và dầu khí.',
    majors: [
      {
        id: 'humg-geo',
        name: 'Kỹ thuật Địa chất',
        code: '7520501',
        admissionScore: { '2020': 16.0, '2021': 17.0, '2022': 16.5, '2023': 16.0, '2024': 16.5 },
        description: 'Nghiên cứu cấu trúc trái đất và tìm kiếm khoáng sản.',
        careerOpportunities: ['Kỹ sư địa chất', 'Thăm dò khoáng sản'],
        category: 'Kỹ thuật',
        isHot: false
      },
      {
        id: 'humg-sur',
        name: 'Kỹ thuật Trắc địa - Bản đồ',
        code: '7520503',
        admissionScore: { '2020': 16.0, '2021': 17.0, '2022': 16.5, '2023': 16.0, '2024': 16.0 },
        description: 'Đo đạc và lập bản đồ bề mặt trái đất.',
        careerOpportunities: ['Kỹ sư trắc địa', 'Chuyên viên GIS'],
        category: 'Kỹ thuật',
        isHot: false
      },
      {
        id: 'humg-kttk',
        name: 'Kỹ thuật tuyển khoáng',
        code: '7520607',
        admissionScore: { '2020': 15.0, '2021': 15.0, '2022': 15.0, '2023': 15.0, '2024': 15.0 },
        description: 'Quy trình làm giàu khoáng sản từ quặng thô.',
        careerOpportunities: ['Kỹ sư tuyển khoáng', 'Quản lý nhà máy chế biến'],
        category: 'Kỹ thuật',
        isHot: false
      },
      {
        id: 'humg-ktdc',
        name: 'Kỹ thuật địa chất',
        code: '7520501',
        admissionScore: { '2020': 15.0, '2021': 15.0, '2022': 15.0, '2023': 15.0, '2024': 15.0 },
        description: 'Nghiên cứu cấu trúc trái đất phục vụ xây dựng và khai thác mỏ.',
        careerOpportunities: ['Kỹ sư địa chất', 'Chuyên viên thăm dò'],
        category: 'Kỹ thuật',
        isHot: false
      }
    ]
  },
  {
    id: 'ufa',
    name: 'Đại học Mỹ thuật TP.HCM',
    code: 'MTS',
    location: 'TP.HCM',
    tuition: 12000000,
    website: 'https://hcmufa.edu.vn',
    description: 'Trường đào tạo nghệ thuật tạo hình hàng đầu miền Nam.',
    majors: [
      {
        id: 'ufa-hh',
        name: 'Hội họa',
        code: '7210103',
        admissionScore: { '2020': 20.0, '2021': 21.0, '2022': 22.0, '2023': 21.5, '2024': 22.0 },
        description: 'Sáng tác tác phẩm hội họa trên nhiều chất liệu.',
        careerOpportunities: ['Họa sĩ tự do', 'Giảng viên mỹ thuật'],
        category: 'Nghệ thuật',
        isHot: false
      },
      {
        id: 'ufa-dk',
        name: 'Điêu khắc',
        code: '7210105',
        admissionScore: { '2020': 18.0, '2021': 19.0, '2022': 20.0, '2023': 19.5, '2024': 20.0 },
        description: 'Tạo hình không gian ba chiều bằng các chất liệu khác nhau.',
        careerOpportunities: ['Nhà điêu khắc', 'Thiết kế tượng đài'],
        category: 'Nghệ thuật',
        isHot: false
      }
    ]
  },
  {
    id: 'skda',
    name: 'Đại học Sân khấu - Điện ảnh TP.HCM',
    code: 'DMS',
    location: 'TP.HCM',
    tuition: 15000000,
    website: 'https://skda.edu.vn',
    description: 'Trường đào tạo nghệ thuật biểu diễn và điện ảnh.',
    majors: [
      {
        id: 'skda-dd',
        name: 'Đạo diễn điện ảnh, truyền hình',
        code: '7210235',
        admissionScore: { '2020': 22.0, '2021': 23.0, '2022': 24.0, '2023': 23.5, '2024': 24.0 },
        description: 'Kỹ năng dàn dựng và chỉ đạo sản xuất phim.',
        careerOpportunities: ['Đạo diễn phim', 'Biên tập chương trình'],
        category: 'Nghệ thuật',
        isHot: true
      },
      {
        id: 'skda-dv',
        name: 'Diễn viên kịch, điện ảnh',
        code: '7210234',
        admissionScore: { '2020': 20.0, '2021': 21.0, '2022': 22.0, '2023': 21.5, '2024': 22.0 },
        description: 'Kỹ thuật biểu diễn và nhập vai nhân vật.',
        careerOpportunities: ['Diễn viên', 'Người mẫu'],
        category: 'Nghệ thuật',
        isHot: true
      }
    ]
  },
  {
    id: 'vnuf',
    name: 'Đại học Lâm nghiệp',
    code: 'LNH',
    location: 'Hà Nội & Đồng Nai',
    tuition: 12000000,
    website: 'https://vnuf.edu.vn',
    description: 'Trường đào tạo hàng đầu về lâm nghiệp và phát triển nông thôn.',
    majors: [
      {
        id: 'vnuf-ls',
        name: 'Lâm sinh',
        code: '7620201',
        admissionScore: { '2020': 15.0, '2021': 16.0, '2022': 15.0, '2023': 15.0, '2024': 15.0 },
        description: 'Kỹ thuật trồng, chăm sóc và phát triển rừng.',
        careerOpportunities: ['Kỹ sư lâm nghiệp', 'Quản lý rừng'],
        category: 'Nông, lâm nghiệp và thủy sản',
        isHot: false
      },
      {
        id: 'vnuf-qltnr',
        name: 'Quản lý tài nguyên rừng',
        code: '7620211',
        admissionScore: { '2020': 15.0, '2021': 16.0, '2022': 15.0, '2023': 15.0, '2024': 15.0 },
        description: 'Bảo tồn đa dạng sinh học và quản lý bền vững tài nguyên rừng.',
        careerOpportunities: ['Kiểm lâm', 'Chuyên gia bảo tồn'],
        category: 'Nông, lâm nghiệp và thủy sản',
        isHot: false
      },
      {
        id: 'vnuf-ls-2',
        name: 'Lâm sinh',
        code: '7620201',
        admissionScore: { '2020': 15.0, '2021': 15.0, '2022': 15.0, '2023': 15.0, '2024': 15.0 },
        description: 'Kỹ thuật trồng, chăm sóc và bảo vệ rừng.',
        careerOpportunities: ['Kỹ sư lâm nghiệp', 'Quản lý rừng'],
        category: 'Nông, lâm nghiệp và thủy sản',
        isHot: false
      },
      {
        id: 'vnuf-ktcq-2',
        name: 'Kiến trúc cảnh quan',
        code: '7580102',
        admissionScore: { '2020': 16.0, '2021': 17.0, '2022': 17.0, '2023': 16.0, '2024': 16.5 },
        description: 'Thiết kế không gian mở, công viên và cảnh quan đô thị.',
        careerOpportunities: ['Kiến trúc sư cảnh quan', 'Thiết kế sân vườn'],
        category: 'Kiến trúc và xây dựng',
        isHot: true
      }
    ]
  },
  {
    id: 'tlu',
    name: 'Đại học Thủy lợi',
    code: 'TLA',
    location: 'Hà Nội & TP.HCM',
    tuition: 15000000,
    website: 'https://tlu.edu.vn',
    description: 'Trường đào tạo hàng đầu về tài nguyên nước và thủy lợi.',
    majors: [
      {
        id: 'tlu-kttnn',
        name: 'Kỹ thuật tài nguyên nước',
        code: '7580212',
        admissionScore: { '2020': 16.0, '2021': 17.0, '2022': 16.5, '2023': 16.0, '2024': 16.5 },
        description: 'Quy hoạch và quản lý các công trình khai thác tài nguyên nước.',
        careerOpportunities: ['Kỹ sư thủy lợi', 'Quản lý tài nguyên nước'],
        category: 'Kỹ thuật',
        isHot: false
      },
      {
        id: 'tlu-ktbc',
        name: 'Kỹ thuật bờ biển',
        code: '7580213',
        admissionScore: { '2020': 16.0, '2021': 17.0, '2022': 16.5, '2023': 16.0, '2024': 16.0 },
        description: 'Thiết kế và bảo vệ các công trình ven biển.',
        careerOpportunities: ['Kỹ sư công trình biển', 'Chuyên viên đê điều'],
        category: 'Kỹ thuật',
        isHot: false
      },
      {
        id: 'tlu-tvh',
        name: 'Thủy văn học',
        code: '7440222',
        admissionScore: { '2020': 15.0, '2021': 15.0, '2022': 15.0, '2023': 15.0, '2024': 15.0 },
        description: 'Nghiên cứu khoa học về nước mặt và nước dưới đất.',
        careerOpportunities: ['Chuyên viên dự báo thủy văn', 'Nghiên cứu viên'],
        category: 'Khoa học tự nhiên',
        isHot: false
      }
    ]
  },
  {
    id: 'huc',
    name: 'Đại học Văn hóa Hà Nội',
    code: 'VHH',
    location: 'Hà Nội',
    tuition: 12000000,
    website: 'https://huc.edu.vn',
    description: 'Trường đào tạo văn hóa, nghệ thuật và du lịch.',
    majors: [
      {
        id: 'huc-kdxbp',
        name: 'Kinh doanh xuất bản phẩm',
        code: '7320402',
        admissionScore: { '2020': 20.0, '2021': 21.0, '2022': 22.0, '2023': 21.5, '2024': 22.0 },
        description: 'Quản lý và kinh doanh trong lĩnh vực xuất bản.',
        careerOpportunities: ['Quản lý nhà sách', 'Biên tập viên xuất bản'],
        category: 'Báo chí và thông tin',
        isHot: false
      },
      {
        id: 'huc-vhh',
        name: 'Văn hóa học',
        code: '7229040',
        admissionScore: { '2020': 22.0, '2021': 23.5, '2022': 23.0, '2023': 22.5, '2024': 23.0 },
        description: 'Nghiên cứu lý luận và thực tiễn văn hóa.',
        careerOpportunities: ['Nghiên cứu viên văn hóa', 'Quản lý văn hóa'],
        category: 'Nhân văn',
        isHot: false
      },
      {
        id: 'huc-bth',
        name: 'Bảo tàng học',
        code: '7320305',
        admissionScore: { '2020': 20.0, '2021': 21.0, '2022': 21.0, '2023': 20.0, '2024': 20.5 },
        description: 'Nghiên cứu, bảo tồn và trưng bày các di sản văn hóa.',
        careerOpportunities: ['Cán bộ bảo tàng', 'Chuyên viên bảo tồn di sản'],
        category: 'Báo chí và thông tin',
        isHot: false
      },
      {
        id: 'huc-kdxbp-2',
        name: 'Kinh doanh xuất bản phẩm',
        code: '7320402',
        admissionScore: { '2020': 22.0, '2021': 23.0, '2022': 23.0, '2023': 22.0, '2024': 22.5 },
        description: 'Quản lý và kinh doanh trong lĩnh vực xuất bản, phát hành sách.',
        careerOpportunities: ['Quản lý nhà sách', 'Chuyên viên phát hành'],
        category: 'Báo chí và thông tin',
        isHot: false
      }
    ]
  },
  {
    id: 'ajc',
    name: 'Học viện Báo chí và Tuyên truyền',
    code: 'HBT',
    location: 'Hà Nội',
    tuition: 20000000,
    website: 'https://ajc.edu.vn',
    description: 'Trường đào tạo báo chí và truyền thông hàng đầu.',
    majors: [
      {
        id: 'ajc-xb',
        name: 'Xuất bản',
        code: '7320401',
        admissionScore: { '2020': 24.0, '2021': 25.5, '2022': 25.0, '2023': 24.8, '2024': 25.2 },
        description: 'Quy trình sản xuất và phát hành ấn phẩm.',
        careerOpportunities: ['Biên tập viên', 'Quản lý xuất bản'],
        category: 'Báo chí và thông tin',
        isHot: false
      },
      {
        id: 'ajc-xd d',
        name: 'Xây dựng Đảng và Chính quyền nhà nước',
        code: '7310202',
        admissionScore: { '2020': 22.0, '2021': 23.0, '2022': 22.5, '2023': 22.0, '2024': 22.5 },
        description: 'Nghiên cứu về hệ thống chính trị và quản lý nhà nước.',
        careerOpportunities: ['Cán bộ nhà nước', 'Nghiên cứu chính trị'],
        category: 'Khoa học xã hội và hành vi',
        isHot: false
      }
    ]
  },
  {
    id: 'ush',
    name: 'Đại học Thể dục Thể thao TP.HCM',
    code: 'TDS',
    location: 'TP.HCM',
    tuition: 12000000,
    website: 'https://ush.edu.vn',
    description: 'Trường đào tạo cán bộ thể dục thể thao trình độ cao.',
    majors: [
      {
        id: 'ush-hltt',
        name: 'Huấn luyện thể thao',
        code: '7810102',
        admissionScore: { '2020': 18.0, '2021': 19.0, '2022': 18.5, '2023': 18.0, '2024': 18.5 },
        description: 'Phương pháp huấn luyện các môn thể thao.',
        careerOpportunities: ['Huấn luyện viên', 'Giáo viên thể dục'],
        category: 'Du lịch, khách sạn, thể thao và dịch vụ cá nhân',
        isHot: false
      },
      {
        id: 'ush-yshtt',
        name: 'Y sinh học thể dục thể thao',
        code: '7810104',
        admissionScore: { '2020': 18.0, '2021': 19.0, '2022': 18.5, '2023': 18.0, '2024': 18.0 },
        description: 'Nghiên cứu tác động của thể thao lên cơ thể người.',
        careerOpportunities: ['Chuyên gia y sinh thể thao', 'Nghiên cứu viên'],
        category: 'Du lịch, khách sạn, thể thao và dịch vụ cá nhân',
        isHot: false
      }
    ]
  },
  {
    id: 'huph',
    name: 'Đại học Y tế Công cộng',
    code: 'YTC',
    location: 'Hà Nội',
    tuition: 18000000,
    website: 'https://huph.edu.vn',
    description: 'Trường đào tạo chuyên sâu về y tế công cộng.',
    majors: [
      {
        id: 'huph-ytcc',
        name: 'Y tế công cộng',
        code: '7720701',
        admissionScore: { '2020': 16.0, '2021': 17.0, '2022': 16.5, '2023': 16.0, '2024': 16.5 },
        description: 'Bảo vệ và nâng cao sức khỏe cộng đồng.',
        careerOpportunities: ['Chuyên viên y tế công cộng', 'Quản lý dự án sức khỏe'],
        category: 'Sức khoẻ',
        isHot: false
      },
      {
        id: 'huph-dd',
        name: 'Dinh dưỡng',
        code: '7720401',
        admissionScore: { '2020': 18.0, '2021': 19.5, '2022': 19.0, '2023': 18.5, '2024': 19.0 },
        description: 'Nghiên cứu về chế độ ăn uống và sức khỏe.',
        careerOpportunities: ['Chuyên gia dinh dưỡng', 'Tư vấn dinh dưỡng'],
        category: 'Sức khoẻ',
        isHot: true
      }
    ]
  },
  {
    id: 'ulsa',
    name: 'Đại học Lao động - Xã hội',
    code: 'DLX',
    location: 'Hà Nội & TP.HCM',
    tuition: 15000000,
    website: 'https://ulsa.edu.vn',
    description: 'Trường đào tạo về lao động, xã hội và bảo hiểm.',
    majors: [
      {
        id: 'ulsa-bh',
        name: 'Bảo hiểm',
        code: '7340204',
        admissionScore: { '2020': 18.0, '2021': 19.5, '2022': 19.0, '2023': 18.5, '2024': 19.0 },
        description: 'Kiến thức về bảo hiểm xã hội và bảo hiểm thương mại.',
        careerOpportunities: ['Chuyên viên bảo hiểm', 'Tư vấn tài chính'],
        category: 'Kinh doanh và quản lý',
        isHot: false
      },
      {
        id: 'ulsa-bh-2',
        name: 'Bảo hiểm',
        code: '7340204',
        admissionScore: { '2020': 18.0, '2021': 19.0, '2022': 19.0, '2023': 18.0, '2024': 18.5 },
        description: 'Kiến thức về bảo hiểm xã hội, bảo hiểm y tế và bảo hiểm thương mại.',
        careerOpportunities: ['Chuyên viên bảo hiểm', 'Đại lý bảo hiểm'],
        category: 'Kinh doanh và quản lý',
        isHot: false
      },
      {
        id: 'ulsa-ctxh',
        name: 'Công tác xã hội',
        code: '7760101',
        admissionScore: { '2020': 17.0, '2021': 18.0, '2022': 18.0, '2023': 17.0, '2024': 17.5 },
        description: 'Hỗ trợ các cá nhân, nhóm và cộng đồng giải quyết các vấn đề xã hội.',
        careerOpportunities: ['Nhân viên xã hội', 'Quản lý dự án cộng đồng'],
        category: 'Dịch vụ xã hội',
        isHot: false
      }
    ]
  },
  {
    id: 'hufi',
    name: 'Đại học Công nghiệp Thực phẩm TP.HCM',
    code: 'DCT',
    location: 'TP.HCM',
    tuition: 28000000,
    website: 'https://hufi.edu.vn',
    description: 'Trường đào tạo chuyên sâu về công nghệ thực phẩm.',
    majors: [
      {
        id: 'hufi-cbts',
        name: 'Công nghệ chế biến thủy sản',
        code: '7540105',
        admissionScore: { '2020': 16.0, '2021': 17.5, '2022': 17.0, '2023': 16.5, '2024': 17.0 },
        description: 'Quy trình chế biến và bảo quản các sản phẩm thủy sản.',
        careerOpportunities: ['Kỹ sư chế biến thủy sản', 'Quản lý chất lượng'],
        category: 'Sản xuất và chế biến',
        isHot: false
      }
    ]
  },
  {
    id: 'hunre',
    name: 'Đại học Tài nguyên và Môi trường Hà Nội',
    code: 'DMT',
    location: 'Hà Nội',
    tuition: 15000000,
    website: 'https://hunre.edu.vn',
    description: 'Trường đào tạo chuyên sâu về tài nguyên và môi trường.',
    majors: [
      {
        id: 'hunre-bdkh',
        name: 'Biến đổi khí hậu và phát triển bền vững',
        code: '7440222',
        admissionScore: { '2020': 16.0, '2021': 17.0, '2022': 16.5, '2023': 16.0, '2024': 16.0 },
        description: 'Nghiên cứu tác động và giải pháp ứng phó biến đổi khí hậu.',
        careerOpportunities: ['Chuyên gia môi trường', 'Nghiên cứu viên'],
        category: 'Khoa học tự nhiên',
        isHot: false
      },
      {
        id: 'hunre-ktkh',
        name: 'Khí tượng và khí hậu học',
        code: '7440221',
        admissionScore: { '2020': 15.0, '2021': 15.0, '2022': 15.0, '2023': 15.0, '2024': 15.0 },
        description: 'Nghiên cứu về thời tiết, khí hậu và các hiện tượng khí tượng.',
        careerOpportunities: ['Dự báo viên khí tượng', 'Nghiên cứu viên khí hậu'],
        category: 'Khoa học tự nhiên',
        isHot: false
      },
      {
        id: 'hunre-tvh',
        name: 'Thủy văn học',
        code: '7440222',
        admissionScore: { '2020': 15.0, '2021': 15.0, '2022': 15.0, '2023': 15.0, '2024': 15.0 },
        description: 'Nghiên cứu về sự vận động, phân phối và chất lượng nước.',
        careerOpportunities: ['Chuyên viên thủy văn', 'Quản lý tài nguyên nước'],
        category: 'Khoa học tự nhiên',
        isHot: false
      }
    ]
  },
  {
    id: 'nuae',
    name: 'Đại học Sư phạm Nghệ thuật Trung ương',
    code: 'GNT',
    location: 'Hà Nội',
    tuition: 12000000,
    website: 'https://spnttw.edu.vn',
    description: 'Trường đào tạo giáo viên nghệ thuật hàng đầu.',
    majors: [
      {
        id: 'nuae-span',
        name: 'Sư phạm Âm nhạc',
        code: '7140221',
        admissionScore: { '2020': 20.0, '2021': 21.0, '2022': 22.0, '2023': 21.5, '2024': 22.0 },
        description: 'Đào tạo giáo viên âm nhạc cho các cấp học.',
        careerOpportunities: ['Giáo viên âm nhạc', 'Nghệ sĩ biểu diễn'],
        category: 'Khoa học giáo dục và đào tạo giáo viên',
        isHot: false
      },
      {
        id: 'nuae-span-2',
        name: 'Sư phạm Âm nhạc',
        code: '7140221',
        admissionScore: { '2020': 18.0, '2021': 19.0, '2022': 19.0, '2023': 18.0, '2024': 18.5 },
        description: 'Đào tạo giáo viên âm nhạc cho các cấp học.',
        careerOpportunities: ['Giáo viên âm nhạc', 'Nghệ sĩ biểu diễn'],
        category: 'Khoa học giáo dục và đào tạo giáo viên',
        isHot: false
      },
      {
        id: 'nuae-spmt-2',
        name: 'Sư phạm Mỹ thuật',
        code: '7140222',
        admissionScore: { '2020': 18.0, '2021': 19.0, '2022': 19.0, '2023': 18.0, '2024': 18.5 },
        description: 'Đào tạo giáo viên mỹ thuật cho các cấp học.',
        careerOpportunities: ['Giáo viên mỹ thuật', 'Họa sĩ'],
        category: 'Khoa học giáo dục và đào tạo giáo viên',
        isHot: false
      }
    ]
  },
  {
    id: 'hcmue',
    name: 'Đại học Sư phạm TP.HCM',
    code: 'SPS',
    location: 'TP.HCM',
    tuition: 0,
    website: 'https://hcmue.edu.vn',
    description: 'Trường sư phạm trọng điểm tại miền Nam.',
    majors: [
      {
        id: 'hcmue-eng',
        name: 'Sư phạm Tiếng Anh',
        code: '7140231',
        admissionScore: { '2020': 26.5, '2021': 27.5, '2022': 27.0, '2023': 27.2, '2024': 27.5 },
        description: 'Đào tạo giáo viên tiếng Anh trình độ cao.',
        careerOpportunities: ['Giáo viên tiếng Anh', 'Biên dịch viên'],
        category: 'Khoa học giáo dục và đào tạo giáo viên',
        isHot: true
      },
      {
        id: 'hcmue-psy',
        name: 'Tâm lý học',
        code: '7310401',
        admissionScore: { '2020': 25.0, '2021': 26.5, '2022': 26.0, '2023': 25.8, '2024': 26.0 },
        description: 'Nghiên cứu tâm lý con người và ứng dụng trong đời sống.',
        careerOpportunities: ['Chuyên gia tâm lý', 'Tư vấn nhân sự'],
        category: 'Khoa học xã hội và hành vi',
        isHot: true
      }
    ]
  },
  {
    id: 'ulaw',
    name: 'Đại học Luật TP.HCM',
    code: 'ULS',
    location: 'TP.HCM',
    tuition: 35000000,
    website: 'https://hcmulaw.edu.vn',
    description: 'Trường đào tạo luật hàng đầu tại miền Nam.',
    majors: [
      {
        id: 'ulaw-lkt',
        name: 'Luật kinh tế',
        code: '7380107',
        admissionScore: { '2020': 26.0, '2021': 27.0, '2022': 26.5, '2023': 26.2, '2024': 26.5 },
        description: 'Pháp luật trong lĩnh vực kinh doanh và thương mại.',
        careerOpportunities: ['Luật sư doanh nghiệp', 'Pháp chế'],
        category: 'Pháp luật',
        isHot: true
      },
      {
        id: 'ulaw-ltm',
        name: 'Luật thương mại quốc tế',
        code: '7380109',
        admissionScore: { '2020': 25.5, '2021': 26.5, '2022': 26.0, '2023': 25.8, '2024': 26.0 },
        description: 'Pháp luật về thương mại và đầu tư quốc tế.',
        careerOpportunities: ['Luật sư quốc tế', 'Chuyên viên pháp lý'],
        category: 'Pháp luật',
        isHot: true
      }
    ]
  },
  {
    id: 'hutech',
    name: 'Đại học Công nghệ TP.HCM',
    code: 'DKT',
    location: 'TP.HCM',
    tuition: 45000000,
    website: 'https://hutech.edu.vn',
    description: 'Trường đại học tư thục đa ngành, chú trọng thực hành.',
    majors: [
      {
        id: 'hutech-auto',
        name: 'Công nghệ Kỹ thuật Ô tô',
        code: '7510205',
        admissionScore: { '2020': 18.0, '2021': 19.0, '2022': 20.0, '2023': 19.5, '2024': 20.0 },
        description: 'Đào tạo kỹ sư ô tô với kỹ năng thực hành cao.',
        careerOpportunities: ['Kỹ sư ô tô', 'Cố vấn dịch vụ'],
        category: 'Kỹ thuật',
        isHot: true
      },
      {
        id: 'hutech-ks',
        name: 'Quản trị khách sạn',
        code: '7810201',
        admissionScore: { '2020': 18.0, '2021': 18.0, '2022': 18.0, '2023': 18.0, '2024': 18.0 },
        description: 'Đào tạo quản lý trong ngành khách sạn và du lịch.',
        careerOpportunities: ['Quản lý khách sạn', 'Tổ chức sự kiện'],
        category: 'Du lịch, khách sạn, thể thao và dịch vụ cá nhân',
        isHot: true
      }
    ]
  },
  {
    id: 'uel',
    name: 'Đại học Kinh tế - Luật',
    code: 'QSK',
    location: 'TP.HCM',
    tuition: 25000000,
    website: 'https://uel.edu.vn',
    description: 'Trường thành viên của ĐHQG TP.HCM, chuyên về kinh tế và luật.',
    majors: [
      {
        id: 'uel-ktdn',
        name: 'Kinh tế đối ngoại',
        code: '7310101',
        admissionScore: { '2020': 27.5, '2021': 28.2, '2022': 27.8, '2023': 27.5, '2024': 27.8 },
        description: 'Đào tạo chuyên gia về thương mại và kinh tế quốc tế.',
        careerOpportunities: ['Chuyên viên xuất nhập khẩu', 'Phân tích thị trường'],
        category: 'Kinh doanh và quản lý',
        isHot: true
      },
      {
        id: 'uel-ecom',
        name: 'Thương mại điện tử',
        code: '7340122',
        admissionScore: { '2020': 26.5, '2021': 27.5, '2022': 27.2, '2023': 27.0, '2024': 27.2 },
        description: 'Kinh doanh trên nền tảng công nghệ số.',
        careerOpportunities: ['Chuyên viên TMĐT', 'Quản trị sàn TMĐT'],
        category: 'Kinh doanh và quản lý',
        isHot: true
      }
    ]
  },
  {
    id: 'uit',
    name: 'Đại học Công nghệ Thông tin - ĐHQG TP.HCM',
    code: 'QSC',
    location: 'TP.HCM',
    tuition: 35000000,
    website: 'https://uit.edu.vn',
    description: 'Trường chuyên sâu về CNTT và truyền thông.',
    majors: [
      {
        id: 'uit-it',
        name: 'Khoa học Máy tính',
        code: '7480101',
        admissionScore: { '2020': 27.0, '2021': 28.0, '2022': 27.5, '2023': 27.2, '2024': 27.5 },
        description: 'Đào tạo chuyên sâu về thuật toán và AI.',
        careerOpportunities: ['Kỹ sư phần mềm', 'Chuyên gia AI'],
        category: 'Máy tính và công nghệ thông tin',
        isHot: true
      },
      {
        id: 'uit-se',
        name: 'Kỹ thuật phần mềm',
        code: '7480103',
        admissionScore: { '2020': 27.2, '2021': 28.2, '2022': 27.8, '2023': 27.5, '2024': 27.8 },
        description: 'Quy trình phát triển phần mềm chuyên nghiệp.',
        careerOpportunities: ['Lập trình viên', 'Quản lý dự án phần mềm'],
        category: 'Máy tính và công nghệ thông tin',
        isHot: true
      },
      {
        id: 'uit-attt',
        name: 'An toàn thông tin',
        code: '7480202',
        admissionScore: { '2020': 26.0, '2021': 27.0, '2022': 28.0, '2023': 27.0, '2024': 27.5 },
        description: 'Bảo vệ hệ thống thông tin và dữ liệu khỏi các cuộc tấn công.',
        careerOpportunities: ['Chuyên gia bảo mật', 'Kỹ sư an toàn mạng'],
        category: 'Máy tính và công nghệ thông tin',
        isHot: true
      },
      {
        id: 'uit-khdl',
        name: 'Khoa học dữ liệu',
        code: '7480109',
        admissionScore: { '2020': 25.0, '2021': 26.0, '2022': 27.0, '2023': 26.5, '2024': 27.0 },
        description: 'Trích xuất tri thức từ dữ liệu để hỗ trợ ra quyết định.',
        careerOpportunities: ['Data Scientist', 'Chuyên viên phân tích dữ liệu'],
        category: 'Máy tính và công nghệ thông tin',
        isHot: true
      }
    ]
  },
  {
    id: 'ctump',
    name: 'Đại học Y Dược Cần Thơ',
    code: 'YCT',
    location: 'Cần Thơ',
    tuition: 45000000,
    website: 'https://ctump.edu.vn',
    description: 'Trường đào tạo y dược lớn nhất miền Tây.',
    majors: [
      {
        id: 'ctump-yk',
        name: 'Y khoa',
        code: '7720101',
        admissionScore: { '2020': 26.95, '2021': 27.0, '2022': 25.6, '2023': 25.5, '2024': 26.0 },
        description: 'Đào tạo bác sĩ đa khoa phục vụ vùng ĐBSCL.',
        careerOpportunities: ['Bác sĩ đa khoa', 'Bác sĩ chuyên khoa'],
        category: 'Sức khoẻ',
        isHot: true
      },
      {
        id: 'ctump-dh',
        name: 'Dược học',
        code: '7720201',
        admissionScore: { '2020': 26.1, '2021': 26.25, '2022': 24.6, '2023': 24.5, '2024': 25.0 },
        description: 'Đào tạo dược sĩ trình độ đại học.',
        careerOpportunities: ['Dược sĩ bệnh viện', 'Dược sĩ sản xuất'],
        category: 'Sức khoẻ',
        isHot: true
      }
    ]
  },
  {
    id: 'huflit',
    name: 'Đại học Ngoại ngữ - Tin học TP.HCM',
    code: 'DNT',
    location: 'TP.HCM',
    tuition: 40000000,
    website: 'https://huflit.edu.vn',
    description: 'Trường tư thục mạnh về ngôn ngữ và CNTT.',
    majors: [
      {
        id: 'huflit-eng',
        name: 'Ngôn ngữ Anh',
        code: '7220201',
        admissionScore: { '2020': 20.0, '2021': 21.0, '2022': 20.5, '2023': 20.0, '2024': 20.5 },
        description: 'Sử dụng thành thạo tiếng Anh trong giao tiếp và công việc.',
        careerOpportunities: ['Biên dịch viên', 'Chuyên viên đối ngoại'],
        category: 'Nhân văn',
        isHot: true
      },
      {
        id: 'huflit-chi',
        name: 'Ngôn ngữ Trung Quốc',
        code: '7220204',
        admissionScore: { '2020': 20.0, '2021': 21.0, '2022': 20.5, '2023': 20.0, '2024': 20.5 },
        description: 'Sử dụng thành thạo tiếng Trung Quốc.',
        careerOpportunities: ['Biên dịch viên tiếng Trung', 'Làm việc tại cty Trung Quốc'],
        category: 'Nhân văn',
        isHot: true
      }
    ]
  },
  {
    id: 'vlu',
    name: 'Đại học Văn Lang',
    code: 'DVL',
    location: 'TP.HCM',
    tuition: 50000000,
    website: 'https://vanlanguni.edu.vn',
    description: 'Trường đại học tư thục hiện đại, đa ngành.',
    majors: [
      {
        id: 'vlu-tkdh',
        name: 'Thiết kế đồ họa',
        code: '7210403',
        admissionScore: { '2020': 18.0, '2021': 18.0, '2022': 18.0, '2023': 18.0, '2024': 18.0 },
        description: 'Đào tạo nhà thiết kế sáng tạo.',
        careerOpportunities: ['Graphic Designer', 'Art Director'],
        category: 'Nghệ thuật',
        isHot: true
      },
      {
        id: 'vlu-pr',
        name: 'Quan hệ công chúng',
        code: '7320108',
        admissionScore: { '2020': 18.0, '2021': 18.0, '2022': 18.0, '2023': 18.0, '2024': 18.0 },
        description: 'Đào tạo chuyên gia truyền thông và PR.',
        careerOpportunities: ['Chuyên viên PR', 'Quản lý sự kiện'],
        category: 'Báo chí và thông tin',
        isHot: true
      }
    ]
  },
  {
    id: 'dtu',
    name: 'Đại học Duy Tân',
    code: 'DDT',
    location: 'Đà Nẵng',
    tuition: 30000000,
    website: 'https://duytan.edu.vn',
    description: 'Trường đại học tư thục lớn nhất miền Trung.',
    majors: [
      {
        id: 'dtu-qtkd',
        name: 'Quản trị kinh doanh',
        code: '7340101',
        admissionScore: { '2020': 14.0, '2021': 14.0, '2022': 14.0, '2023': 14.0, '2024': 14.0 },
        description: 'Kỹ năng quản lý và điều hành doanh nghiệp.',
        careerOpportunities: ['Quản lý kinh doanh', 'Khởi nghiệp'],
        category: 'Kinh doanh và quản lý',
        isHot: true
      },
      {
        id: 'dtu-it',
        name: 'Công nghệ thông tin',
        code: '7480201',
        admissionScore: { '2020': 14.0, '2021': 14.0, '2022': 14.0, '2023': 14.0, '2024': 14.0 },
        description: 'Đào tạo kỹ sư CNTT ứng dụng.',
        careerOpportunities: ['Lập trình viên', 'Quản trị mạng'],
        category: 'Máy tính và công nghệ thông tin',
        isHot: true
      }
    ]
  },
  {
    id: 'qnu',
    name: 'Đại học Quy Nhơn',
    code: 'DQN',
    location: 'Bình Định',
    tuition: 15000000,
    website: 'https://qnu.edu.vn',
    description: 'Trường đại học đa ngành tại khu vực Nam Trung Bộ.',
    majors: [
      {
        id: 'qnu-math',
        name: 'Sư phạm Toán học',
        code: '7140209',
        admissionScore: { '2020': 18.5, '2021': 19.0, '2022': 20.0, '2023': 19.5, '2024': 20.0 },
        description: 'Đào tạo giáo viên Toán cho các trường phổ thông.',
        careerOpportunities: ['Giáo viên Toán', 'Cán bộ giáo dục'],
        category: 'Khoa học giáo dục và đào tạo giáo viên',
        isHot: true
      },
      {
        id: 'qnu-se',
        name: 'Kỹ thuật phần mềm',
        code: '7480103',
        admissionScore: { '2020': 15.0, '2021': 15.0, '2022': 15.0, '2023': 15.0, '2024': 15.0 },
        description: 'Đào tạo kỹ sư phát triển phần mềm.',
        careerOpportunities: ['Lập trình viên', 'Tester'],
        category: 'Máy tính và công nghệ thông tin',
        isHot: true
      }
    ]
  },
  {
    id: 'hvnh',
    name: 'Học viện Ngân hàng',
    code: 'NHH',
    location: 'Hà Nội',
    tuition: 25000000,
    website: 'https://hvnh.edu.vn',
    description: 'Trường đào tạo chuyên sâu về tài chính, ngân hàng tại miền Bắc.',
    majors: [
      {
        id: 'hvnh-tcnb',
        name: 'Tài chính - Ngân hàng',
        code: '7340201',
        admissionScore: { '2020': 25.5, '2021': 26.5, '2022': 26.0, '2023': 25.8, '2024': 26.2 },
        description: 'Kiến thức về quản lý tài chính và nghiệp vụ ngân hàng.',
        careerOpportunities: ['Nhân viên ngân hàng', 'Chuyên viên tài chính'],
        category: 'Kinh doanh và quản lý',
        isHot: true
      }
    ]
  },
  {
    id: 'hvtc',
    name: 'Học viện Tài chính',
    code: 'HTC',
    location: 'Hà Nội',
    tuition: 22000000,
    website: 'https://hvtc.edu.vn',
    description: 'Trường đào tạo hàng đầu về tài chính và kế toán.',
    majors: [
      {
        id: 'hvtc-kt',
        name: 'Kế toán',
        code: '7340301',
        admissionScore: { '2020': 26.0, '2021': 27.0, '2022': 26.5, '2023': 26.2, '2024': 26.8 },
        description: 'Đào tạo chuyên gia kế toán và kiểm toán.',
        careerOpportunities: ['Kế toán viên', 'Kiểm toán viên'],
        category: 'Kinh doanh và quản lý',
        isHot: true
      }
    ]
  },
  {
    id: 'hvhq',
    name: 'Học viện Hải quân',
    code: 'HQH',
    location: 'Khánh Hòa',
    tuition: 0,
    website: 'https://hocvienhaiquan.edu.vn',
    description: 'Trường đào tạo sĩ quan chỉ huy kỹ thuật hải quân.',
    majors: [
      {
        id: 'hvhq-chkt',
        name: 'Chỉ huy tàu Hải quân',
        code: '7860202',
        admissionScore: { '2020': 23.5, '2021': 24.5, '2022': 23.0, '2023': 22.5, '2024': 23.0 },
        description: 'Đào tạo sĩ quan chỉ huy vận hành tàu chiến.',
        careerOpportunities: ['Sĩ quan Hải quân', 'Quản lý hàng hải'],
        category: 'An ninh, Quốc phòng',
        isHot: false
      }
    ]
  },
  {
    id: 'hvktqs',
    name: 'Học viện Kỹ thuật Quân sự',
    code: 'KTA',
    location: 'Hà Nội',
    tuition: 0,
    website: 'https://mta.edu.vn',
    description: 'Trường đào tạo kỹ sư quân sự hàng đầu Việt Nam.',
    majors: [
      {
        id: 'hvktqs-attt',
        name: 'An toàn thông tin',
        code: '7480202',
        admissionScore: { '2020': 26.5, '2021': 27.5, '2022': 27.0, '2023': 26.8, '2024': 27.2 },
        description: 'Bảo mật hệ thống thông tin quân sự và dân sự.',
        careerOpportunities: ['Chuyên gia bảo mật', 'Sĩ quan kỹ thuật'],
        category: 'Máy tính và công nghệ thông tin',
        isHot: true
      }
    ]
  },
  {
    id: 'hvpks',
    name: 'Trường Đại học Kiểm sát Hà Nội',
    code: 'DKS',
    location: 'Hà Nội',
    tuition: 15000000,
    website: 'https://tks.edu.vn',
    description: 'Trường đào tạo cán bộ cho ngành Kiểm sát.',
    majors: [
      {
        id: 'hvpks-l',
        name: 'Luật',
        code: '7380101',
        admissionScore: { '2020': 25.0, '2021': 26.5, '2022': 26.0, '2023': 25.5, '2024': 26.0 },
        description: 'Đào tạo cử nhân luật chuyên ngành kiểm sát.',
        careerOpportunities: ['Kiểm sát viên', 'Luật sư'],
        category: 'Pháp luật',
        isHot: true
      }
    ]
  },
  {
    id: 'hvcsnd',
    name: 'Học viện Cảnh sát Nhân dân',
    code: 'CSH',
    location: 'Hà Nội',
    tuition: 0,
    website: 'https://hvcsnd.edu.vn',
    description: 'Trường đào tạo sĩ quan cảnh sát hàng đầu.',
    majors: [
      {
        id: 'hvcsnd-tphs',
        name: 'Tội phạm học và điều tra tội phạm',
        code: '7860102',
        admissionScore: { '2020': 27.0, '2021': 28.0, '2022': 27.5, '2023': 27.2, '2024': 27.8 },
        description: 'Nghiên cứu tội phạm và kỹ thuật điều tra.',
        careerOpportunities: ['Sĩ quan cảnh sát', 'Điều tra viên'],
        category: 'An ninh, Quốc phòng',
        isHot: true
      }
    ]
  },
  {
    id: 'hvannnd',
    name: 'Học viện An ninh Nhân dân',
    code: 'ANH',
    location: 'Hà Nội',
    tuition: 0,
    website: 'https://hvannd.edu.vn',
    description: 'Trường đào tạo sĩ quan an ninh hàng đầu.',
    majors: [
      {
        id: 'hvannnd-attt',
        name: 'An toàn thông tin',
        code: '7480202',
        admissionScore: { '2020': 26.0, '2021': 27.0, '2022': 26.5, '2023': 26.2, '2024': 26.8 },
        description: 'Bảo vệ an ninh mạng và hệ thống thông tin quốc gia.',
        careerOpportunities: ['Sĩ quan an ninh mạng', 'Chuyên gia bảo mật'],
        category: 'Máy tính và công nghệ thông tin',
        isHot: true
      }
    ]
  },
  {
    id: 'hvyctruyenvn',
    name: 'Học viện Y Dược học Cổ truyền Việt Nam',
    code: 'HYD',
    location: 'Hà Nội',
    tuition: 25000000,
    website: 'https://vutm.edu.vn',
    description: 'Trường đào tạo y dược cổ truyền lớn nhất Việt Nam.',
    majors: [
      {
        id: 'hvyctruyenvn-yhct',
        name: 'Y học cổ truyền',
        code: '7720115',
        admissionScore: { '2020': 24.0, '2021': 25.0, '2022': 24.5, '2023': 24.0, '2024': 24.5 },
        description: 'Kết hợp y học hiện đại và y học cổ truyền trong điều trị.',
        careerOpportunities: ['Bác sĩ Y học cổ truyền', 'Nghiên cứu dược liệu'],
        category: 'Sức khoẻ',
        isHot: true
      }
    ]
  },
  {
    id: 'hvpt',
    name: 'Học viện Phụ nữ Việt Nam',
    code: 'HPN',
    location: 'Hà Nội',
    tuition: 15000000,
    website: 'https://hvpnvn.edu.vn',
    description: 'Trường đào tạo đa ngành với định hướng giới và phát triển.',
    majors: [
      {
        id: 'hvpt-gdp',
        name: 'Giới và phát triển',
        code: '7310399',
        admissionScore: { '2020': 16.0, '2021': 17.0, '2022': 16.5, '2023': 16.0, '2024': 16.5 },
        description: 'Nghiên cứu về bình đẳng giới và các vấn đề phát triển xã hội.',
        careerOpportunities: ['Chuyên gia giới', 'Làm việc tại các tổ chức phi chính phủ'],
        category: 'Khoa học xã hội và hành vi',
        isHot: false
      },
      {
        id: 'hvpt-ctxh',
        name: 'Công tác xã hội',
        code: '7760101',
        admissionScore: { '2020': 17.0, '2021': 18.0, '2022': 17.5, '2023': 17.0, '2024': 17.5 },
        description: 'Hỗ trợ các nhóm yếu thế và phát triển cộng đồng.',
        careerOpportunities: ['Nhân viên xã hội', 'Quản lý dự án'],
        category: 'Dịch vụ xã hội',
        isHot: false
      },
      {
        id: 'hvpt-l',
        name: 'Luật',
        code: '7380101',
        admissionScore: { '2020': 18.0, '2021': 19.0, '2022': 18.5, '2023': 18.0, '2024': 18.5 },
        description: 'Đào tạo cử nhân luật với định hướng bảo vệ quyền phụ nữ.',
        careerOpportunities: ['Luật sư', 'Tư vấn pháp lý'],
        category: 'Pháp luật',
        isHot: false
      }
    ]
  },
  {
    id: 'hvtt',
    name: 'Học viện Tòa án',
    code: 'HTA',
    location: 'Hà Nội',
    tuition: 0,
    website: 'https://hvta.vitv.vn',
    description: 'Trường đào tạo cán bộ cho hệ thống Tòa án.',
    majors: [
      {
        id: 'hvtt-l',
        name: 'Luật',
        code: '7380101',
        admissionScore: { '2020': 26.0, '2021': 27.5, '2022': 27.0, '2023': 26.8, '2024': 27.2 },
        description: 'Đào tạo cử nhân luật chuyên ngành tòa án.',
        careerOpportunities: ['Thẩm phán', 'Thư ký tòa án'],
        category: 'Pháp luật',
        isHot: true
      }
    ]
  },
  {
    id: 'hvdct',
    name: 'Học viện Ngoại giao',
    code: 'HQT',
    location: 'Hà Nội',
    tuition: 40000000,
    website: 'https://dav.edu.vn',
    description: 'Trường đào tạo cán bộ ngoại giao và quan hệ quốc tế.',
    majors: [
      {
        id: 'hvdct-qhqt',
        name: 'Quan hệ quốc tế',
        code: '7310206',
        admissionScore: { '2020': 27.0, '2021': 28.5, '2022': 28.0, '2023': 27.8, '2024': 28.2 },
        description: 'Nghiên cứu về chính trị, kinh tế và luật pháp quốc tế.',
        careerOpportunities: ['Nhà ngoại giao', 'Chuyên viên đối ngoại'],
        category: 'Khoa học xã hội và hành vi',
        isHot: true
      },
      {
        id: 'hvdct-lqt',
        name: 'Luật quốc tế',
        code: '7380108',
        admissionScore: { '2020': 26.5, '2021': 27.5, '2022': 27.0, '2023': 26.8, '2024': 27.5 },
        description: 'Nghiên cứu hệ thống pháp luật quốc tế và giải quyết tranh chấp.',
        careerOpportunities: ['Luật sư quốc tế', 'Chuyên viên pháp lý'],
        category: 'Pháp luật',
        isHot: true
      },
      {
        id: 'hvdct-ttqt',
        name: 'Truyền thông quốc tế',
        code: '7320107',
        admissionScore: { '2020': 26.0, '2021': 27.0, '2022': 26.5, '2023': 26.2, '2024': 27.0 },
        description: 'Đào tạo chuyên gia truyền thông trong môi trường toàn cầu.',
        careerOpportunities: ['Chuyên viên truyền thông', 'Phóng viên quốc tế'],
        category: 'Báo chí và thông tin',
        isHot: true
      }
    ]
  },
  {
    id: 'hvct',
    name: 'Học viện Chính trị Công an Nhân dân',
    code: 'HCA',
    location: 'Hà Nội',
    tuition: 0,
    website: 'https://hvctcand.edu.vn',
    description: 'Trường đào tạo lý luận chính trị cho lực lượng Công an.',
    majors: [
      {
        id: 'hvct-xlh',
        name: 'Xây dựng Đảng và chính quyền nhà nước',
        code: '7310202',
        admissionScore: { '2020': 25.0, '2021': 26.0, '2022': 25.5, '2023': 25.0, '2024': 25.5 },
        description: 'Nghiên cứu về công tác xây dựng Đảng trong lực lượng vũ trang.',
        careerOpportunities: ['Cán bộ chính trị', 'Nghiên cứu viên'],
        category: 'Khoa học xã hội và hành vi',
        isHot: false
      }
    ]
  },
  {
    id: 'hvth',
    name: 'Học viện Thanh thiếu niên Việt Nam',
    code: 'HTN',
    location: 'Hà Nội',
    tuition: 12000000,
    website: 'https://vya.edu.vn',
    description: 'Trường đào tạo cán bộ Đoàn, Hội, Đội.',
    majors: [
      {
        id: 'hvth-ctxh',
        name: 'Công tác thanh thiếu nhi',
        code: '7760103',
        admissionScore: { '2020': 16.0, '2021': 17.0, '2022': 16.5, '2023': 16.0, '2024': 16.5 },
        description: 'Kỹ năng tổ chức và quản lý các hoạt động thanh thiếu nhi.',
        careerOpportunities: ['Cán bộ Đoàn', 'Quản lý hoạt động thanh niên'],
        category: 'Dịch vụ xã hội',
        isHot: false
      },
      {
        id: 'hvth-qlnhnn',
        name: 'Quản lý nhà nước',
        code: '7310205',
        admissionScore: { '2020': 15.0, '2021': 16.0, '2022': 15.5, '2023': 15.0, '2024': 15.5 },
        description: 'Đào tạo cán bộ quản lý hành chính công.',
        careerOpportunities: ['Cán bộ nhà nước', 'Chuyên viên hành chính'],
        category: 'Khoa học xã hội và hành vi',
        isHot: false
      },
      {
        id: 'hvth-psy',
        name: 'Tâm lý học',
        code: '7310401',
        admissionScore: { '2020': 17.0, '2021': 18.0, '2022': 17.5, '2023': 17.0, '2024': 17.5 },
        description: 'Nghiên cứu tâm lý ứng dụng trong công tác thanh thiếu niên.',
        careerOpportunities: ['Chuyên gia tâm lý', 'Tư vấn thanh niên'],
        category: 'Khoa học xã hội và hành vi',
        isHot: false
      },
      {
        id: 'hvth-l',
        name: 'Luật',
        code: '7380101',
        admissionScore: { '2020': 16.5, '2021': 17.5, '2022': 17.0, '2023': 16.8, '2024': 17.2 },
        description: 'Đào tạo cử nhân luật với định hướng công tác thanh niên.',
        careerOpportunities: ['Luật sư', 'Tư vấn pháp lý'],
        category: 'Pháp luật',
        isHot: false
      }
    ]
  },
  {
    id: 'nttu',
    name: 'Đại học Nguyễn Tất Thành',
    code: 'NTT',
    location: 'TP.HCM',
    tuition: 45000000,
    website: 'https://ntt.edu.vn',
    description: 'Trường đại học đa ngành, đa lĩnh vực với định hướng ứng dụng.',
    majors: [
      {
        id: 'nttu-yk',
        name: 'Y khoa',
        code: '7720101',
        admissionScore: { '2020': 24.0, '2021': 25.0, '2022': 25.0, '2023': 23.0, '2024': 23.5 },
        description: 'Đào tạo bác sĩ đa khoa có kiến thức và kỹ năng thực hành tốt.',
        careerOpportunities: ['Bác sĩ đa khoa', 'Làm việc tại các bệnh viện'],
        category: 'Sức khoẻ',
        isHot: true
      },
      {
        id: 'nttu-oto',
        name: 'Công nghệ kỹ thuật ô tô',
        code: '7510205',
        admissionScore: { '2020': 18.0, '2021': 19.0, '2022': 19.0, '2023': 18.0, '2024': 18.5 },
        description: 'Đào tạo kỹ sư vận hành, bảo trì và sửa chữa ô tô.',
        careerOpportunities: ['Kỹ sư ô tô', 'Quản lý xưởng dịch vụ'],
        category: 'Kỹ thuật',
        isHot: true
      }
    ]
  },
  {
    id: 'uef',
    name: 'Đại học Kinh tế - Tài chính TP.HCM',
    code: 'UEF',
    location: 'TP.HCM',
    tuition: 70000000,
    website: 'https://uef.edu.vn',
    description: 'Trường đại học chuẩn quốc tế, chú trọng kỹ năng tiếng Anh.',
    majors: [
      {
        id: 'uef-qhqt',
        name: 'Quan hệ quốc tế',
        code: '7310206',
        admissionScore: { '2020': 20.0, '2021': 21.0, '2022': 21.0, '2023': 19.0, '2024': 20.0 },
        description: 'Đào tạo chuyên gia trong lĩnh vực đối ngoại và ngoại giao.',
        careerOpportunities: ['Chuyên viên đối ngoại', 'Làm việc tại các tổ chức quốc tế'],
        category: 'Khoa học xã hội và hành vi',
        isHot: true
      },
      {
        id: 'uef-kdqt',
        name: 'Kinh doanh quốc tế',
        code: '7340120',
        admissionScore: { '2020': 22.0, '2021': 23.0, '2022': 23.0, '2023': 21.0, '2024': 22.0 },
        description: 'Kiến thức về quản trị kinh doanh trong môi trường toàn cầu.',
        careerOpportunities: ['Chuyên viên xuất nhập khẩu', 'Quản lý kinh doanh quốc tế'],
        category: 'Kinh doanh và quản lý',
        isHot: true
      }
    ]
  },
  {
    id: 'hiu',
    name: 'Đại học Quốc tế Hồng Bàng',
    code: 'HIU',
    location: 'TP.HCM',
    tuition: 55000000,
    website: 'https://hiu.vn',
    description: 'Trường đại học quốc tế với thế mạnh về khối ngành sức khỏe.',
    majors: [
      {
        id: 'hiu-rhm',
        name: 'Răng - Hàm - Mặt',
        code: '7720501',
        admissionScore: { '2020': 22.0, '2021': 23.0, '2022': 23.0, '2023': 22.5, '2024': 23.0 },
        description: 'Đào tạo bác sĩ chuyên khoa Răng - Hàm - Mặt.',
        careerOpportunities: ['Bác sĩ nha khoa', 'Phòng khám nha khoa'],
        category: 'Sức khoẻ',
        isHot: true
      },
      {
        id: 'hiu-dh',
        name: 'Dược học',
        code: '7720201',
        admissionScore: { '2020': 21.0, '2021': 21.0, '2022': 21.0, '2023': 21.0, '2024': 21.0 },
        description: 'Đào tạo dược sĩ có kiến thức chuyên sâu về thuốc.',
        careerOpportunities: ['Dược sĩ bệnh viện', 'Quản lý nhà thuốc'],
        category: 'Sức khoẻ',
        isHot: true
      }
    ]
  },
  {
    id: 'hou',
    name: 'Đại học Mở Hà Nội',
    code: 'MHN',
    location: 'Hà Nội',
    tuition: 20000000,
    website: 'https://hou.edu.vn',
    description: 'Trường đại học công lập với hình thức đào tạo mở và từ xa.',
    majors: [
      {
        id: 'hou-cnsh',
        name: 'Công nghệ sinh học',
        code: '7420201',
        admissionScore: { '2020': 18.0, '2021': 19.0, '2022': 19.0, '2023': 18.5, '2024': 19.0 },
        description: 'Ứng dụng sinh học trong nông nghiệp, y dược và môi trường.',
        careerOpportunities: ['Kỹ sư sinh học', 'Nghiên cứu viên'],
        category: 'Khoa học sự sống',
        isHot: false
      },
      {
        id: 'hou-nntq',
        name: 'Ngôn ngữ Trung Quốc',
        code: '7220204',
        admissionScore: { '2020': 24.0, '2021': 25.0, '2022': 25.0, '2023': 24.5, '2024': 25.0 },
        description: 'Sử dụng thành thạo tiếng Trung trong giao tiếp và công việc.',
        careerOpportunities: ['Biên phiên dịch', 'Giáo viên tiếng Trung'],
        category: 'Nhân văn',
        isHot: true
      }
    ]
  },
  {
    id: 'tlc',
    name: 'Đại học Thăng Long',
    code: 'DTL',
    location: 'Hà Nội',
    tuition: 30000000,
    website: 'https://thanglong.edu.vn',
    description: 'Trường đại học tư thục đầu tiên tại Việt Nam với cơ sở vật chất hiện đại.',
    majors: [
      {
        id: 'tlc-ttdpt',
        name: 'Truyền thông đa phương tiện',
        code: '7320104',
        admissionScore: { '2020': 24.0, '2021': 25.0, '2022': 25.0, '2023': 24.0, '2024': 24.5 },
        description: 'Sáng tạo nội dung trên các nền tảng truyền thông kỹ thuật số.',
        careerOpportunities: ['Chuyên viên truyền thông', 'Nhà thiết kế đồ họa'],
        category: 'Báo chí và thông tin',
        isHot: true
      },
      {
        id: 'tlc-qtks',
        name: 'Quản trị khách sạn',
        code: '7810201',
        admissionScore: { '2020': 21.0, '2021': 22.0, '2022': 22.0, '2023': 21.0, '2024': 21.5 },
        description: 'Quản lý và vận hành các dịch vụ trong khách sạn cao cấp.',
        careerOpportunities: ['Quản lý khách sạn', 'Giám sát dịch vụ'],
        category: 'Du lịch, khách sạn, thể thao và dịch vụ cá nhân',
        isHot: true
      }
    ]
  },
  {
    id: 'vhu',
    name: 'Đại học Văn Hiến',
    code: 'DVH',
    location: 'TP.HCM',
    tuition: 35000000,
    website: 'https://vhu.edu.vn',
    description: 'Trường đại học đào tạo theo định hướng ứng dụng và nhân văn.',
    majors: [
      {
        id: 'vhu-vhh',
        name: 'Văn hóa học',
        code: '7229040',
        admissionScore: { '2020': 15.0, '2021': 16.0, '2022': 16.0, '2023': 15.0, '2024': 15.5 },
        description: 'Nghiên cứu các giá trị văn hóa và quản lý văn hóa.',
        careerOpportunities: ['Cán bộ văn hóa', 'Nghiên cứu viên'],
        category: 'Nhân văn',
        isHot: false
      },
      {
        id: 'vhu-dl',
        name: 'Du lịch',
        code: '7810101',
        admissionScore: { '2020': 16.0, '2021': 17.0, '2022': 17.0, '2023': 16.0, '2024': 16.5 },
        description: 'Đào tạo chuyên gia trong lĩnh vực lữ hành và du lịch.',
        careerOpportunities: ['Hướng dẫn viên du lịch', 'Điều hành tour'],
        category: 'Du lịch, khách sạn, thể thao và dịch vụ cá nhân',
        isHot: true
      }
    ]
  },
  {
    id: 'stu',
    name: 'Đại học Công nghệ Sài Gòn',
    code: 'DSG',
    location: 'TP.HCM',
    tuition: 25000000,
    website: 'https://stu.edu.vn',
    description: 'Trường đào tạo kỹ thuật và công nghệ ứng dụng.',
    majors: [
      {
        id: 'stu-cntp',
        name: 'Công nghệ thực phẩm',
        code: '7540101',
        admissionScore: { '2020': 15.0, '2021': 15.0, '2022': 15.0, '2023': 15.0, '2024': 15.0 },
        description: 'Nghiên cứu quy trình chế biến và bảo quản thực phẩm.',
        careerOpportunities: ['Kỹ sư thực phẩm', 'Quản lý chất lượng'],
        category: 'Sản xuất và chế biến',
        isHot: false
      },
      {
        id: 'stu-tkcn',
        name: 'Thiết kế công nghiệp',
        code: '7210402',
        admissionScore: { '2020': 15.0, '2021': 15.0, '2022': 15.0, '2023': 15.0, '2024': 15.0 },
        description: 'Sáng tạo kiểu dáng và công năng cho các sản phẩm công nghiệp.',
        careerOpportunities: ['Nhà thiết kế sản phẩm', 'Chuyên viên tạo mẫu'],
        category: 'Nghệ thuật',
        isHot: false
      }
    ]
  },
  {
    id: 'hau',
    name: 'Đại học Kiến trúc Hà Nội',
    code: 'KTA',
    location: 'Hà Nội',
    tuition: 18000000,
    website: 'https://hau.edu.vn',
    description: 'Trường đào tạo kiến trúc và quy hoạch hàng đầu tại miền Bắc.',
    majors: [
      {
        id: 'hau-qh',
        name: 'Quy hoạch vùng và đô thị',
        code: '7580105',
        admissionScore: { '2020': 18.0, '2021': 19.0, '2022': 19.0, '2023': 18.5, '2024': 19.0 },
        description: 'Thiết kế và quản lý không gian đô thị, nông thôn.',
        careerOpportunities: ['Kiến trúc sư quy hoạch', 'Quản lý đô thị'],
        category: 'Kiến trúc và xây dựng',
        isHot: false
      },
      {
        id: 'hau-tkdh',
        name: 'Thiết kế đồ họa',
        code: '7210403',
        admissionScore: { '2020': 22.0, '2021': 23.0, '2022': 23.0, '2023': 22.0, '2024': 22.5 },
        description: 'Sáng tạo hình ảnh và truyền thông thị giác.',
        careerOpportunities: ['Designer', 'Art Director'],
        category: 'Nghệ thuật',
        isHot: true
      }
    ]
  },
  {
    id: 'uiad',
    name: 'Đại học Mỹ thuật Công nghiệp',
    code: 'MTC',
    location: 'Hà Nội',
    tuition: 15000000,
    website: 'https://mythuatcongnghiep.edu.vn',
    description: 'Trường đào tạo mỹ thuật ứng dụng lâu đời nhất Việt Nam.',
    majors: [
      {
        id: 'uiad-tktt',
        name: 'Thiết kế thời trang',
        code: '7210404',
        admissionScore: { '2020': 20.0, '2021': 21.0, '2022': 21.0, '2023': 20.5, '2024': 21.0 },
        description: 'Sáng tạo trang phục và phụ kiện thời trang.',
        careerOpportunities: ['Nhà thiết kế thời trang', 'Stylist'],
        category: 'Nghệ thuật',
        isHot: true
      },
      {
        id: 'uiad-tknt',
        name: 'Thiết kế nội thất',
        code: '7210405',
        admissionScore: { '2020': 21.0, '2021': 22.0, '2022': 22.0, '2023': 21.5, '2024': 22.0 },
        description: 'Thiết kế không gian sống và làm việc.',
        careerOpportunities: ['Nhà thiết kế nội thất', 'Tư vấn trang trí'],
        category: 'Nghệ thuật',
        isHot: true
      }
    ]
  },
  {
    id: 'skdah',
    name: 'Đại học Sân khấu - Điện ảnh Hà Nội',
    code: 'SKD',
    location: 'Hà Nội',
    tuition: 12000000,
    website: 'http://skdah.edu.vn',
    description: 'Trường đào tạo nghệ thuật sân khấu và điện ảnh hàng đầu.',
    majors: [
      {
        id: 'skdah-bdm',
        name: 'Biên đạo múa',
        code: '7210243',
        admissionScore: { '2020': 18.0, '2021': 19.0, '2022': 19.0, '2023': 18.0, '2024': 18.5 },
        description: 'Sáng tác và dàn dựng các tác phẩm múa.',
        careerOpportunities: ['Biên đạo múa', 'Giảng viên nghệ thuật'],
        category: 'Nghệ thuật',
        isHot: false
      },
      {
        id: 'skdah-qph',
        name: 'Quay phim điện ảnh',
        code: '7210236',
        admissionScore: { '2020': 20.0, '2021': 21.0, '2022': 21.0, '2023': 20.0, '2024': 20.5 },
        description: 'Kỹ thuật và nghệ thuật ghi hình điện ảnh.',
        careerOpportunities: ['Quay phim', 'Đạo diễn hình ảnh'],
        category: 'Nghệ thuật',
        isHot: false
      }
    ]
  },
  {
    id: 'huit',
    name: 'Đại học Công thương TP.HCM',
    code: 'DCT',
    location: 'TP.HCM',
    tuition: 30000000,
    website: 'https://huit.edu.vn',
    description: 'Trường đào tạo đa ngành với thế mạnh về công nghệ thực phẩm.',
    majors: [
      {
        id: 'huit-dbcl',
        name: 'Đảm bảo chất lượng và an toàn thực phẩm',
        code: '7540106',
        admissionScore: { '2020': 20.0, '2021': 21.0, '2022': 21.0, '2023': 20.0, '2024': 20.5 },
        description: 'Kiểm soát và quản lý chất lượng trong chuỗi sản xuất thực phẩm.',
        careerOpportunities: ['Chuyên viên QA/QC', 'Kiểm định viên thực phẩm'],
        category: 'Sản xuất và chế biến',
        isHot: true
      },
      {
        id: 'huit-qtdvau',
        name: 'Quản trị dịch vụ ăn uống',
        code: '7810202',
        admissionScore: { '2020': 18.0, '2021': 19.0, '2022': 19.0, '2023': 18.0, '2024': 18.5 },
        description: 'Quản lý vận hành các cơ sở dịch vụ ăn uống và ẩm thực.',
        careerOpportunities: ['Quản lý nhà hàng', 'Chuyên gia ẩm thực'],
        category: 'Du lịch, khách sạn, thể thao và dịch vụ cá nhân',
        isHot: true
      }
    ]
  },
  {
    id: 'ulsa',
    name: 'Đại học Lao động - Xã hội',
    code: 'DLX',
    location: 'Hà Nội',
    tuition: 15000000,
    website: 'http://ulsa.edu.vn',
    description: 'Trường đào tạo chuyên sâu về lao động, xã hội và bảo hiểm.',
    majors: [
      {
        id: 'ulsa-bh-2',
        name: 'Bảo hiểm',
        code: '7340204',
        admissionScore: { '2020': 18.0, '2021': 19.0, '2022': 19.0, '2023': 18.0, '2024': 18.5 },
        description: 'Kiến thức về bảo hiểm xã hội, bảo hiểm y tế và bảo hiểm thương mại.',
        careerOpportunities: ['Chuyên viên bảo hiểm', 'Đại lý bảo hiểm'],
        category: 'Kinh doanh và quản lý',
        isHot: false
      },
      {
        id: 'ulsa-ctxh',
        name: 'Công tác xã hội',
        code: '7760101',
        admissionScore: { '2020': 17.0, '2021': 18.0, '2022': 18.0, '2023': 17.0, '2024': 17.5 },
        description: 'Hỗ trợ các cá nhân, nhóm và cộng đồng giải quyết các vấn đề xã hội.',
        careerOpportunities: ['Nhân viên xã hội', 'Quản lý dự án cộng đồng'],
        category: 'Dịch vụ xã hội',
        isHot: false
      }
    ]
  },
  {
    id: 'huha',
    name: 'Đại học Nội vụ Hà Nội',
    code: 'DNV',
    location: 'Hà Nội',
    tuition: 15000000,
    website: 'https://huha.edu.vn',
    description: 'Trường đào tạo cán bộ ngành nội vụ và quản lý nhà nước.',
    majors: [
      {
        id: 'huha-lth',
        name: 'Lưu trữ học',
        code: '7320303',
        admissionScore: { '2020': 16.0, '2021': 17.0, '2022': 17.0, '2023': 16.0, '2024': 16.5 },
        description: 'Quản lý, bảo quản và khai thác các tài liệu lưu trữ.',
        careerOpportunities: ['Cán bộ lưu trữ', 'Quản trị văn phòng'],
        category: 'Báo chí và thông tin',
        isHot: false
      },
      {
        id: 'huha-vhh',
        name: 'Văn hóa học',
        code: '7229040',
        admissionScore: { '2020': 18.0, '2021': 19.0, '2022': 19.0, '2023': 18.0, '2024': 18.5 },
        description: 'Nghiên cứu các hiện tượng văn hóa và quản lý văn hóa.',
        careerOpportunities: ['Chuyên viên văn hóa', 'Nghiên cứu viên'],
        category: 'Nhân văn',
        isHot: false
      }
    ]
  },
  {
    id: 'tuu',
    name: 'Đại học Công đoàn',
    code: 'LDA',
    location: 'Hà Nội',
    tuition: 15000000,
    website: 'http://dhcongdoan.edu.vn',
    description: 'Trường đào tạo cán bộ công đoàn và các ngành kinh tế, xã hội.',
    majors: [
      {
        id: 'tuu-qhld',
        name: 'Quan hệ lao động',
        code: '7340408',
        admissionScore: { '2020': 18.0, '2021': 19.0, '2022': 19.0, '2023': 18.0, '2024': 18.5 },
        description: 'Nghiên cứu mối quan hệ giữa người lao động và người sử dụng lao động.',
        careerOpportunities: ['Chuyên viên nhân sự', 'Cán bộ công đoàn'],
        category: 'Kinh doanh và quản lý',
        isHot: false
      },
      {
        id: 'tuu-xhh',
        name: 'Xã hội học',
        code: '7310301',
        admissionScore: { '2020': 17.0, '2021': 18.0, '2022': 18.0, '2023': 17.0, '2024': 17.5 },
        description: 'Nghiên cứu về cấu trúc và sự vận động của xã hội.',
        careerOpportunities: ['Nghiên cứu viên xã hội', 'Chuyên viên tư vấn'],
        category: 'Khoa học xã hội và hành vi',
        isHot: false
      }
    ]
  },
  {
    id: 'haui',
    name: 'Đại học Công nghiệp Hà Nội',
    code: 'HaUI',
    location: 'Hà Nội',
    tuition: 20000000,
    website: 'https://haui.edu.vn',
    description: 'Trường đại học kỹ thuật đa ngành với bề dày lịch sử đào tạo nghề.',
    majors: [
      {
        id: 'haui-cnktin',
        name: 'Công nghệ kỹ thuật in',
        code: '7510403',
        admissionScore: { '2020': 18.0, '2021': 19.0, '2022': 19.0, '2023': 18.5, '2024': 19.0 },
        description: 'Đào tạo kỹ sư vận hành và quản lý quy trình in ấn hiện đại.',
        careerOpportunities: ['Kỹ sư in', 'Quản lý sản xuất bao bì'],
        category: 'Kỹ thuật',
        isHot: false
      },
      {
        id: 'haui-tktt',
        name: 'Thiết kế thời trang',
        code: '7210404',
        admissionScore: { '2020': 20.0, '2021': 21.0, '2022': 21.0, '2023': 20.0, '2024': 20.5 },
        description: 'Sáng tạo và phát triển các bộ sưu tập thời trang ứng dụng.',
        careerOpportunities: ['Nhà thiết kế thời trang', 'Quản lý thương hiệu may mặc'],
        category: 'Nghệ thuật',
        isHot: true
      }
    ]
  },
  {
    id: 'uth',
    name: 'Đại học Giao thông vận tải TP.HCM',
    code: 'GTS',
    location: 'TP.HCM',
    tuition: 18000000,
    website: 'https://ut.edu.vn',
    description: 'Trường đào tạo chuyên sâu về giao thông vận tải hàng hải và đường bộ.',
    majors: [
      {
        id: 'uth-kttt',
        name: 'Kỹ thuật tàu thủy',
        code: '7520122',
        admissionScore: { '2020': 15.0, '2021': 16.0, '2022': 16.0, '2023': 15.0, '2024': 15.5 },
        description: 'Thiết kế, đóng mới và sửa chữa các loại tàu thủy.',
        careerOpportunities: ['Kỹ sư đóng tàu', 'Giám sát kỹ thuật hàng hải'],
        category: 'Kỹ thuật',
        isHot: false
      },
      {
        id: 'uth-ktcthh',
        name: 'Kỹ thuật công trình hàng hải',
        code: '7580206',
        admissionScore: { '2020': 15.0, '2021': 15.0, '2022': 15.0, '2023': 15.0, '2024': 15.0 },
        description: 'Thiết kế và thi công các công trình cảng, đường thủy.',
        careerOpportunities: ['Kỹ sư cảng đường thủy', 'Quản lý dự án hàng hải'],
        category: 'Kiến trúc và xây dựng',
        isHot: false
      }
    ]
  },
  {
    id: 'vute',
    name: 'Đại học Sư phạm Kỹ thuật Vinh',
    code: 'SKV',
    location: 'Nghệ An',
    tuition: 12000000,
    website: 'http://vute.edu.vn',
    description: 'Trường đào tạo giáo viên kỹ thuật và kỹ sư công nghệ tại miền Trung.',
    majors: [
      {
        id: 'vute-spcn',
        name: 'Sư phạm công nghệ',
        code: '7140246',
        admissionScore: { '2020': 18.0, '2021': 19.0, '2022': 19.0, '2023': 18.0, '2024': 18.5 },
        description: 'Đào tạo giáo viên dạy môn Công nghệ cho các trường phổ thông.',
        careerOpportunities: ['Giáo viên Công nghệ', 'Cán bộ quản lý giáo dục'],
        category: 'Khoa học giáo dục và đào tạo giáo viên',
        isHot: false
      },
      {
        id: 'vute-ktdk',
        name: 'Kỹ thuật điều khiển và tự động hóa',
        code: '7520216',
        admissionScore: { '2020': 15.0, '2021': 16.0, '2022': 16.0, '2023': 15.0, '2024': 15.5 },
        description: 'Thiết kế và vận hành các hệ thống điều khiển tự động.',
        careerOpportunities: ['Kỹ sư tự động hóa', 'Chuyên viên kỹ thuật'],
        category: 'Kỹ thuật',
        isHot: true
      }
    ]
  },
  {
    id: 'nute',
    name: 'Đại học Sư phạm Kỹ thuật Nam Định',
    code: 'SKN',
    location: 'Nam Định',
    tuition: 12000000,
    website: 'http://nute.edu.vn',
    description: 'Trường đào tạo sư phạm kỹ thuật và kỹ sư công nghệ ứng dụng.',
    majors: [
      {
        id: 'nute-spktcn',
        name: 'Sư phạm kỹ thuật công nghiệp',
        code: '7140210',
        admissionScore: { '2020': 18.0, '2021': 19.0, '2022': 19.0, '2023': 18.0, '2024': 18.5 },
        description: 'Đào tạo giáo viên kỹ thuật cho các trường nghề và trung học.',
        careerOpportunities: ['Giáo viên kỹ thuật', 'Huấn luyện viên nghề'],
        category: 'Khoa học giáo dục và đào tạo giáo viên',
        isHot: false
      },
      {
        id: 'nute-cnktck',
        name: 'Công nghệ kỹ thuật cơ khí',
        code: '7510201',
        admissionScore: { '2020': 15.0, '2021': 15.0, '2022': 15.0, '2023': 15.0, '2024': 15.0 },
        description: 'Ứng dụng nguyên lý kỹ thuật vào sản xuất cơ khí.',
        careerOpportunities: ['Kỹ sư cơ khí', 'Giám sát sản xuất'],
        category: 'Kỹ thuật',
        isHot: false
      }
    ]
  },
  {
    id: 'utehy',
    name: 'Đại học Sư phạm Kỹ thuật Hưng Yên',
    code: 'SKH',
    location: 'Hưng Yên',
    tuition: 15000000,
    website: 'https://utehy.edu.vn',
    description: 'Trường đại học kỹ thuật trọng điểm tại khu vực đồng bằng sông Hồng.',
    majors: [
      {
        id: 'utehy-cnkthh',
        name: 'Công nghệ kỹ thuật hóa học',
        code: '7510401',
        admissionScore: { '2020': 15.0, '2021': 15.0, '2022': 15.0, '2023': 15.0, '2024': 15.0 },
        description: 'Nghiên cứu và ứng dụng hóa học trong sản xuất công nghiệp.',
        careerOpportunities: ['Kỹ sư hóa học', 'Chuyên viên phòng thí nghiệm'],
        category: 'Kỹ thuật',
        isHot: false
      },
      {
        id: 'utehy-cnktmt',
        name: 'Công nghệ kỹ thuật môi trường',
        code: '7510406',
        admissionScore: { '2020': 15.0, '2021': 15.0, '2022': 15.0, '2023': 15.0, '2024': 15.0 },
        description: 'Giải quyết các vấn đề ô nhiễm và bảo vệ môi trường công nghiệp.',
        careerOpportunities: ['Kỹ sư môi trường', 'Tư vấn xử lý chất thải'],
        category: 'Kỹ thuật',
        isHot: false
      }
    ]
  },
  {
    id: 'bafu',
    name: 'Đại học Nông Lâm Bắc Giang',
    code: 'DBG',
    location: 'Bắc Giang',
    tuition: 12000000,
    website: 'https://bafu.edu.vn',
    description: 'Trường đào tạo chuyên sâu về nông lâm nghiệp và môi trường.',
    majors: [
      {
        id: 'bafu-cn',
        name: 'Chăn nuôi',
        code: '7620105',
        admissionScore: { '2020': 15.0, '2021': 15.0, '2022': 15.0, '2023': 15.0, '2024': 15.0 },
        description: 'Kỹ thuật nuôi dưỡng và quản lý sức khỏe vật nuôi.',
        careerOpportunities: ['Kỹ sư chăn nuôi', 'Quản lý trang trại'],
        category: 'Nông, lâm nghiệp và thủy sản',
        isHot: false
      },
      {
        id: 'bafu-khct',
        name: 'Khoa học cây trồng',
        code: '7620110',
        admissionScore: { '2020': 15.0, '2021': 15.0, '2022': 15.0, '2023': 15.0, '2024': 15.0 },
        description: 'Nghiên cứu và cải tiến quy trình trồng trọt.',
        careerOpportunities: ['Kỹ sư nông nghiệp', 'Chuyên viên giống cây trồng'],
        category: 'Nông, lâm nghiệp và thủy sản',
        isHot: false
      }
    ]
  },
  {
    id: 'hpu',
    name: 'Đại học Hải Phòng',
    code: 'THP',
    location: 'Hải Phòng',
    tuition: 15000000,
    website: 'https://dhhp.edu.vn',
    description: 'Trường đại học đa ngành lớn nhất tại thành phố cảng Hải Phòng.',
    majors: [
      {
        id: 'hpu-spnv',
        name: 'Sư phạm Ngữ văn',
        code: '7140217',
        admissionScore: { '2020': 18.5, '2021': 19.0, '2022': 20.0, '2023': 19.0, '2024': 19.5 },
        description: 'Đào tạo giáo viên Ngữ văn cho các trường phổ thông.',
        careerOpportunities: ['Giáo viên Ngữ văn', 'Biên tập viên'],
        category: 'Khoa học giáo dục và đào tạo giáo viên',
        isHot: true
      },
      {
        id: 'hpu-nna',
        name: 'Ngôn ngữ Anh',
        code: '7220201',
        admissionScore: { '2020': 15.0, '2021': 16.0, '2022': 16.0, '2023': 15.5, '2024': 16.0 },
        description: 'Sử dụng thành thạo tiếng Anh trong nhiều lĩnh vực.',
        careerOpportunities: ['Biên phiên dịch', 'Chuyên viên đối ngoại'],
        category: 'Nhân văn',
        isHot: true
      }
    ]
  },
  {
    id: 'tbump',
    name: 'Đại học Y Dược Thái Bình',
    code: 'YTB',
    location: 'Thái Bình',
    tuition: 35000000,
    website: 'http://tbump.edu.vn',
    description: 'Trường đào tạo y dược uy tín tại khu vực đồng bằng Bắc Bộ.',
    majors: [
      {
        id: 'tbump-yk',
        name: 'Y khoa',
        code: '7720101',
        admissionScore: { '2020': 26.0, '2021': 27.0, '2022': 26.5, '2023': 25.8, '2024': 26.2 },
        description: 'Đào tạo bác sĩ đa khoa phục vụ chăm sóc sức khỏe nhân dân.',
        careerOpportunities: ['Bác sĩ đa khoa', 'Nghiên cứu viên y học'],
        category: 'Sức khoẻ',
        isHot: true
      },
      {
        id: 'tbump-yhdp',
        name: 'Y học dự phòng',
        code: '7720110',
        admissionScore: { '2020': 21.0, '2021': 22.0, '2022': 21.5, '2023': 20.0, '2024': 21.0 },
        description: 'Phòng ngừa bệnh tật và bảo vệ sức khỏe cộng đồng.',
        careerOpportunities: ['Bác sĩ y học dự phòng', 'Cán bộ y tế công cộng'],
        category: 'Sức khoẻ',
        isHot: false
      }
    ]
  },
  {
    id: 'vui',
    name: 'Đại học Công nghiệp Việt Trì',
    code: 'VUI',
    location: 'Phú Thọ',
    tuition: 15000000,
    website: 'https://vui.edu.vn',
    description: 'Trường đào tạo kỹ thuật công nghiệp tại vùng trung du miền núi phía Bắc.',
    majors: [
      {
        id: 'vui-cnkthh',
        name: 'Công nghệ kỹ thuật hóa học',
        code: '7510401',
        admissionScore: { '2020': 15.0, '2021': 15.0, '2022': 15.0, '2023': 15.0, '2024': 15.0 },
        description: 'Ứng dụng hóa học trong sản xuất phân bón, hóa chất.',
        careerOpportunities: ['Kỹ sư hóa học', 'Quản lý sản xuất'],
        category: 'Kỹ thuật',
        isHot: false
      },
      {
        id: 'vui-cnktmt',
        name: 'Công nghệ kỹ thuật môi trường',
        code: '7510406',
        admissionScore: { '2020': 15.0, '2021': 15.0, '2022': 15.0, '2023': 15.0, '2024': 15.0 },
        description: 'Kiểm soát ô nhiễm và quản lý môi trường khu công nghiệp.',
        careerOpportunities: ['Kỹ sư môi trường', 'Chuyên viên an toàn lao động'],
        category: 'Kỹ thuật',
        isHot: false
      }
    ]
  },
  {
    id: 'utt',
    name: 'Đại học Công nghệ Giao thông vận tải',
    code: 'GTA',
    location: 'Hà Nội',
    tuition: 18000000,
    website: 'https://utt.edu.vn',
    description: 'Trường đào tạo nguồn nhân lực chất lượng cao cho ngành giao thông vận tải.',
    majors: [
      {
        id: 'utt-ktxdctgt',
        name: 'Kỹ thuật xây dựng công trình giao thông',
        code: '7580205',
        admissionScore: { '2020': 16.0, '2021': 17.0, '2022': 17.0, '2023': 16.0, '2024': 16.5 },
        description: 'Thiết kế và thi công cầu, đường, hầm.',
        careerOpportunities: ['Kỹ sư cầu đường', 'Quản lý dự án xây dựng'],
        category: 'Kiến trúc và xây dựng',
        isHot: true
      },
      {
        id: 'utt-log',
        name: 'Logistics và quản lý chuỗi cung ứng',
        code: '7510605',
        admissionScore: { '2020': 22.0, '2021': 23.0, '2022': 24.0, '2023': 23.0, '2024': 23.5 },
        description: 'Quản lý dòng hàng hóa và thông tin từ nguồn cung đến người tiêu dùng.',
        careerOpportunities: ['Chuyên viên Logistics', 'Quản lý kho vận'],
        category: 'Kinh doanh và quản lý',
        isHot: true
      }
    ]
  },
  {
    id: 'epu',
    name: 'Đại học Điện lực',
    code: 'DDP',
    location: 'Hà Nội',
    tuition: 18000000,
    website: 'https://epu.edu.vn',
    description: 'Trường đại học công lập đào tạo nguồn nhân lực chất lượng cao cho ngành năng lượng.',
    majors: [
      {
        id: 'epu-ktd',
        name: 'Kỹ thuật điện',
        code: '7520201',
        admissionScore: { '2020': 18.0, '2021': 19.0, '2022': 20.0, '2023': 19.5, '2024': 20.0 },
        description: 'Thiết kế, vận hành và bảo trì hệ thống điện.',
        careerOpportunities: ['Kỹ sư điện', 'Quản lý vận hành lưới điện'],
        category: 'Kỹ thuật',
        isHot: true
      },
      {
        id: 'epu-cnktnl',
        name: 'Công nghệ kỹ thuật năng lượng',
        code: '7510404',
        admissionScore: { '2020': 15.0, '2021': 16.0, '2022': 16.0, '2023': 15.0, '2024': 15.5 },
        description: 'Nghiên cứu và ứng dụng các nguồn năng lượng mới và tái tạo.',
        careerOpportunities: ['Kỹ sư năng lượng', 'Chuyên viên tư vấn tiết kiệm năng lượng'],
        category: 'Kỹ thuật',
        isHot: false
      }
    ]
  },
  {
    id: 'dlu',
    name: 'Đại học Đà Lạt',
    code: 'TDL',
    location: 'Lâm Đồng',
    tuition: 15000000,
    website: 'https://dlu.edu.vn',
    description: 'Trường đại học đa ngành tại thành phố ngàn hoa Đà Lạt.',
    majors: [
      {
        id: 'dlu-nh',
        name: 'Nông học',
        code: '7620109',
        admissionScore: { '2020': 15.0, '2021': 15.0, '2022': 15.0, '2023': 15.0, '2024': 15.0 },
        description: 'Nghiên cứu các quy luật sinh học của cây trồng.',
        careerOpportunities: ['Kỹ sư nông học', 'Chuyên viên giống cây trồng'],
        category: 'Nông, lâm nghiệp và thủy sản',
        isHot: false
      },
      {
        id: 'dlu-cnsth',
        name: 'Công nghệ sau thu hoạch',
        code: '7540104',
        admissionScore: { '2020': 15.0, '2021': 15.0, '2022': 15.0, '2023': 15.0, '2024': 15.0 },
        description: 'Bảo quản và chế biến nông sản sau khi thu hoạch.',
        careerOpportunities: ['Kỹ sư chế biến', 'Quản lý chất lượng nông sản'],
        category: 'Sản xuất và chế biến',
        isHot: false
      }
    ]
  },
  {
    id: 'ttn',
    name: 'Đại học Tây Nguyên',
    code: 'TTN',
    location: 'Đắk Lắk',
    tuition: 12000000,
    website: 'https://ttn.edu.vn',
    description: 'Trường đại học trọng điểm tại khu vực Tây Nguyên.',
    majors: [
      {
        id: 'ttn-cn',
        name: 'Chăn nuôi',
        code: '7620105',
        admissionScore: { '2020': 15.0, '2021': 15.0, '2022': 15.0, '2023': 15.0, '2024': 15.0 },
        description: 'Kỹ thuật nuôi dưỡng và quản lý vật nuôi.',
        careerOpportunities: ['Kỹ sư chăn nuôi', 'Quản lý trang trại'],
        category: 'Nông, lâm nghiệp và thủy sản',
        isHot: false
      },
      {
        id: 'ttn-ty',
        name: 'Thú y',
        code: '7640101',
        admissionScore: { '2020': 18.0, '2021': 19.0, '2022': 19.0, '2023': 18.0, '2024': 18.5 },
        description: 'Chăm sóc sức khỏe và điều trị bệnh cho động vật.',
        careerOpportunities: ['Bác sĩ thú y', 'Chuyên viên kiểm dịch'],
        category: 'Thú y',
        isHot: true
      }
    ]
  },
  {
    id: 'hua',
    name: 'Trường Đại học Nghệ thuật - Đại học Huế',
    code: 'DNH',
    location: 'Thừa Thiên Huế',
    tuition: 12000000,
    website: 'http://hufa.edu.vn',
    description: 'Trường đào tạo nghệ thuật uy tín tại cố đô Huế.',
    majors: [
      {
        id: 'hua-hh',
        name: 'Hội họa',
        code: '7210103',
        admissionScore: { '2020': 18.0, '2021': 19.0, '2022': 19.0, '2023': 18.0, '2024': 18.5 },
        description: 'Sáng tác các tác phẩm hội họa trên nhiều chất liệu.',
        careerOpportunities: ['Họa sĩ', 'Giảng viên mỹ thuật'],
        category: 'Nghệ thuật',
        isHot: false
      },
      {
        id: 'hua-dk',
        name: 'Điêu khắc',
        code: '7210105',
        admissionScore: { '2020': 18.0, '2021': 19.0, '2022': 19.0, '2023': 18.0, '2024': 18.5 },
        description: 'Tạo hình các tác phẩm điêu khắc không gian ba chiều.',
        careerOpportunities: ['Nhà điêu khắc', 'Thiết kế mỹ thuật'],
        category: 'Nghệ thuật',
        isHot: false
      }
    ]
  },
  {
    id: 'tuaf',
    name: 'Trường Đại học Nông Lâm - Đại học Thái Nguyên',
    code: 'DTN',
    location: 'Thái Nguyên',
    tuition: 12000000,
    website: 'https://tuaf.edu.vn',
    description: 'Trường đào tạo nông lâm nghiệp hàng đầu tại miền núi phía Bắc.',
    majors: [
      {
        id: 'tuaf-khmt',
        name: 'Khoa học môi trường',
        code: '7440301',
        admissionScore: { '2020': 15.0, '2021': 15.0, '2022': 15.0, '2023': 15.0, '2024': 15.0 },
        description: 'Nghiên cứu các vấn đề môi trường và giải pháp bảo vệ.',
        careerOpportunities: ['Chuyên viên môi trường', 'Nghiên cứu viên'],
        category: 'Khoa học tự nhiên',
        isHot: false
      },
      {
        id: 'tuaf-kn',
        name: 'Khuyến nông',
        code: '7620114',
        admissionScore: { '2020': 15.0, '2021': 15.0, '2022': 15.0, '2023': 15.0, '2024': 15.0 },
        description: 'Chuyển giao tiến bộ kỹ thuật nông nghiệp cho nông dân.',
        careerOpportunities: ['Cán bộ khuyến nông', 'Tư vấn nông nghiệp'],
        category: 'Nông, lâm nghiệp và thủy sản',
        isHot: false
      }
    ]
  },
  {
    id: 'vhs',
    name: 'Đại học Văn hóa TP.HCM',
    code: 'VHS',
    location: 'TP.HCM',
    tuition: 12000000,
    website: 'https://vhs.edu.vn',
    description: 'Trường đào tạo cán bộ văn hóa và thông tin tại miền Nam.',
    majors: [
      {
        id: 'vhs-qlvh',
        name: 'Quản lý văn hóa',
        code: '7229042',
        admissionScore: { '2020': 18.0, '2021': 19.0, '2022': 19.0, '2023': 18.0, '2024': 18.5 },
        description: 'Tổ chức và quản lý các hoạt động văn hóa nghệ thuật.',
        careerOpportunities: ['Quản lý văn hóa', 'Tổ chức sự kiện'],
        category: 'Nhân văn',
        isHot: true
      },
      {
        id: 'vhs-tttv',
        name: 'Thông tin - Thư viện',
        code: '7320201',
        admissionScore: { '2020': 15.0, '2021': 16.0, '2022': 16.0, '2023': 15.0, '2024': 15.5 },
        description: 'Quản lý và khai thác nguồn tài nguyên thông tin.',
        careerOpportunities: ['Cán bộ thư viện', 'Quản trị thông tin'],
        category: 'Báo chí và thông tin',
        isHot: false
      }
    ]
  }
];
