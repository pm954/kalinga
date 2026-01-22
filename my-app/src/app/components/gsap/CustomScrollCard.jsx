'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import './CustomScrollCard.css';

export default function CustomScrollCard({ cards = [] }) {
    useEffect(() => {
        // Wait for aat.js to load
        const initCards = () => {
            if (typeof window !== 'undefined' && window.aat) {
                const { ScrollObserver, valueAtPercentage } = window.aat;

                const cardsContainer = document.querySelector('.custom-scroll-cards');
                const cardElements = document.querySelectorAll('.custom-scroll-card');

                if (!cardsContainer || !cardElements.length) return;

                cardsContainer.style.setProperty('--cards-count', cardElements.length);
                cardsContainer.style.setProperty('--card-height', `${cardElements[0].clientHeight}px`);

                Array.from(cardElements).forEach((card, index) => {
                    const offsetTop = 20 + index * 20;
                    card.style.paddingTop = `${offsetTop}px`;

                    if (index === cardElements.length - 1) {
                        return;
                    }

                    const toScale = 1 - (cardElements.length - 1 - index) * 0.05;
                    const nextCard = cardElements[index + 1];
                    const cardInner = card.querySelector('.custom-scroll-card__inner');

                    ScrollObserver.Element(nextCard, {
                        offsetTop,
                        offsetBottom: window.innerHeight - card.clientHeight
                    }).onScroll(({ percentageY }) => {
                        cardInner.style.scale = valueAtPercentage({
                            from: 1,
                            to: toScale,
                            percentage: percentageY
                        });
                        cardInner.style.filter = `brightness(${valueAtPercentage({
                            from: 1,
                            to: 0.85,
                            percentage: percentageY
                        })})`;
                    });
                });
            }
        };

        const timer = setTimeout(initCards, 100);
        return () => clearTimeout(timer);
    }, [cards]);

    return (
        <>
            <Script
                src="https://unpkg.com/aatjs@0.0.3/dist/aat.min.js"
                strategy="beforeInteractive"
            />

            <div className="custom-scroll-space custom-scroll-space--small"></div>
            <div className="custom-scroll-cards">
                {cards.map((item, index) => (
                    <div key={index} className="custom-scroll-card" data-index={index}>
                        <div className="custom-scroll-card__inner">
                            <div className="custom-scroll-card__icon-container">
                                {item.icon}
                            </div>
                            <div className="custom-scroll-card__content">
                                <h2 className="custom-scroll-card__title">{item.title}</h2>
                                <p className="custom-scroll-card__description">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="custom-scroll-space"></div>
        </>
    );
}
