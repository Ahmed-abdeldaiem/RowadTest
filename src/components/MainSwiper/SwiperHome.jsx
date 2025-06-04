import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledSwiper = styled(Box)(({ theme }) => ({
  width: '100%',
  position: 'relative',
  margin: 0,
  padding: 0,
  '& .swiper': {
    position: 'relative',
  },
  '& .swiper-slide': {
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(10, 6, 69, 0.7))',
      zIndex: 1
    }
  },
  '& .swiper-button-next, & .swiper-button-prev': {
    color: '#fff',
    transition: 'all 0.4s ease-in-out',
    '&:hover': {
      transform: 'scale(1.2)',
    }
  },
  '& .swiper-pagination-bullet': {
    width: '20px !important',
    height: '4px !important',
    borderRadius: '20% !important',
    background: '#fff !important',
    opacity:  '1 !important'   ,
    margin: '0 8px !important',
    transition: 'all 0.4s ease-in-out'
  },
  '& .swiper-pagination-bullet-active': {
    background: '#0334bb !important',
    transform: 'scale(1.2)',
    transition: 'all 0.4s ease-in-out'
  },
  '& .swiper-slide-active .slide-title': {
    animation: 'slideInDown 0.8s ease-in-out forwards'
  },
  '& .swiper-slide-active .slide-subtitle': {
    animation: 'slideInRight 0.8s ease-in-out 0.3s forwards'
  },
  '& .swiper-slide-active .slide-text': {
    animation: 'fadeIn 0.8s ease-in-out 0.6s forwards'
  },
  '& .swiper-slide:not(.swiper-slide-active) .slide-title, & .swiper-slide:not(.swiper-slide-active) .slide-subtitle, & .swiper-slide:not(.swiper-slide-active) .slide-text': {
    opacity: 0
  },
  '@keyframes slideInDown': {
    '0%': {
      opacity: 0,
      transform: 'translateY(-50px)'
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)'
    }
  },
  '@keyframes slideInRight': {
    '0%': {
      opacity: 0,
      transform: 'translateX(50px)'
    },
    '100%': {
      opacity: 1,
      transform: 'translateX(0)'
    }
  },
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    }
  }
}));

const slides = [
  {
    header: 'أثاث مكتبي عصري',
    subheader: 'تصاميم مبتكرة تناسب مكتبك',
    text: 'نقدم لك مجموعة متكاملة من الأثاث المكتبي العصري الذي يجمع بين الأناقة والراحة لتحسين بيئة العمل الخاصة بك',
    image: 'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Rowad-Image/refs/heads/main/mainSwiber/mainSwiber1.jpeg'
  },
  {
    header: 'أثاث منزلي فاخر',
    subheader: 'لمسات فنية تزين منزلك',
    text: 'اكتشف تشكيلتنا الواسعة من الأثاث المنزلي الفاخر الذي يضيف لمسة من الأناقة والرفاهية إلى منزلك',
    image: 'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Rowad-Image/refs/heads/main/mainSwiber/mainSwiber2-1.jpeg'
  },
  {
    header: 'تصاميم فندقية راقية',
    subheader: 'حلول متكاملة للفنادق',
    text: 'نوفر حلولاً متكاملة للفنادق والمنتجعات مع تصاميم عصرية تجمع بين الفخامة والراحة',
    image: 'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Rowad-Image/refs/heads/main/mainSwiber/mainSwiber3-1.jpeg'
  },
  {
    header: 'أثاث تعليمي متكامل',
    subheader: 'للمدارس والجامعات والمراكز التعليمية',
    text: 'نقدم أثاثاً تعليمياً متكاملاً للمدارس والجامعات والمراكز التعليمية مع تصاميم عصرية تناسب البيئة التعليمية',
    image: 'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Rowad-Image/refs/heads/main/mainSwiber/mainSwiber4-1.jpg'
  },
  {
    header: 'خدمات متكاملة',
    subheader: 'من التصميم إلى التركيب',
    text: 'نقدم خدمات شاملة تبدأ من التصميم وحتى التركيب والصيانة لضمان رضا العملاء ',
    image: 'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Rowad-Image/refs/heads/main/mainSwiber/mainSwiber5.jpg'
  }
];

const paginationStyle = {
  '.swiper-pagination': {
    bottom: '20px',
  }
};

export default function SwiperHome() {
  return (
    <StyledSwiper>
      <Box sx={paginationStyle}>
        <Swiper
          style={{
            width: '100%',
            height: '97vh',
            margin: 0,
            padding: 0,
            position: 'relative'
          }}
          effect={'fade'}
          fadeEffect={{
            crossFade: true
          }}
          navigation={true}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
          }}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          dir="rtl"
        >
          {slides.map((slide, index) => (
            <SwiperSlide 
              key={index}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <Container sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                <Box
                  className="animate-slide"
                  sx={{
                    color: '#fff',
                    paddingTop: '30px',
                    textAlign: { xs: 'center', lg: 'right' },
                    maxWidth: '600px',
                    position: 'relative',
                    zIndex: 2,
                    marginRight: 'auto',
                    opacity: 1,
                    transform: 'none',
                    animation: 'fadeInRight 1s ease-in-out'
                  }}
                >
                  <Typography
                    className="slide-title"
                    variant="h2"
                    sx={{
                      fontWeight: 'bold',
                      mb: 2,
                      fontSize: { xs: '1.7rem', md: '3.5rem' },
                      opacity: 0
                    }}
                  >
                    {slide.header}
                  </Typography>

                  <Typography
                    className="slide-subtitle"
                    variant="h4"
                    sx={{
                      fontWeight: 'bold',
                      mb: 3,
                      fontSize: { xs: '1.3rem', md: '2rem' },
                      opacity: 0
                    }}
                  >
                    {slide.subheader}
                  </Typography>

                  <Typography
                    className="slide-text"
                    variant="body1"
                    sx={{
                      fontSize: { xs: '1rem', md: '1.4rem' },
                      fontWeight: 'bold',
                      lineHeight: 1.8,
                      opacity: 0
                    }}
                  >
                    {slide.text}
                  </Typography>
                </Box>
              </Container>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </StyledSwiper>
  );
}
