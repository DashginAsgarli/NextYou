import './Faq.css';
import React, { useState } from 'react';

function FeedbackFAQ  () {
    const [activeIndex, setActiveIndex] = useState(null);
    const faqData = [
        {
            question: "NextYou-da hansı kitabları axtara bilərəm?",
            answer: "Kitabxanamızda proqramlaşdırma, texnologiya, elm-kitablar, romanlar, tarix və psixologiya kimi 20+ kateqoriyada 1000-dən çox kitab mövcuddur. Axtarış sistemi ilə istədiyiniz kitabı tez tapıb qiymətləndirə və rəy yaza bilərsiniz."
        },
        {
            question: "Kitabları necə qiymətləndirə və şərh yaza bilərəm?",
            answer: "Hər kitabın səhifəsində 1-5 ulduz arası qiymətləndirmə və rəy yazma bölməsi var."
        },
        {
            question: "Musiqi bölməsində hansı funksiyalar var?",
            answer: "Musiqi bölməsində janr, ifaçı və playlist əsasında axtarış edə, dinlədiyiniz mahnıları 'sevimlilər'ə əlavə edə, öz playlistlərini yarada, musiqi üzrə rəy və qiymətləndirmə paylaşa bilərsiniz."
        },
        {
            question: "Kod öyrənmə bölməsi necə işləyir?",
            answer: "Kod öyrənmə bölməsində Python, JavaScript, React, C++ kimi dillər üzrə interaktiv dərslər, canlı kod editoru, tapşırıqlar və layihələr var. Kod yazarkən real-time xəta aşkarlama və AI-dən kömək ala bilərsiniz."
        },
        {
            question: "Dil öyrənmə bölməsində hansı dillər var?",
            answer: "Hazırda İngilis dili üzrə geniş resurslar mövcuddur. Yaxın gələcəkdə Alman, İspan, Fransız və digər dillər də əlavə olunacaq. Dil öyrənmə AI dəstəkli danışıq praktikası, interaktiv məşqlər və real vaxt düzəlişləri ilə təmin olunur."
        },
        {
            question: "Musiqi dinləyərkən digər işləri görə bilərəmmi?",
            answer: "Bəli, NEXUS-un arxa planda işləmə xüsusiyyəti var. Musiqi dinləyərkən eyni zamanda kitab oxuya, kod yaza və ya dil öyrənə bilərsiniz. Hər bölmə ayrı-ayrı pəncərələrdə işləyir."
        },

        {
            question: "NextYou-u mobil cihazlarda istifadə etmək olar?",
            answer: "Bəli, bütün mobil cihazlarda (iOS və Android) işləyən tam responsiv dizayna malikdir. Mobil tətbiq versiyası da yaxın gələcəkdə planlaşdırılır."
        }
    ];

    function toggleFAQ  (index)  {setActiveIndex(activeIndex === index ? null : index);
};

    return (
        <diV className="feedback-box">
            <div className="feedback-faq-container">
                <h3 className="feedback-faq-title">Tez-tez Verilən Suallar</h3>
                <div className="feedback-faq-list">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className={`feedback-faq-item ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="feedback-faq-question">
                                <span>{item.question}</span>
                                <i className={`fas fa-chevron-${activeIndex === index ? 'up' : 'down'}`}></i>
                            </div>
                            <div className="feedback-faq-answer">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </diV>
    );
};

export default FeedbackFAQ;