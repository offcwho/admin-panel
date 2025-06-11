'use client'
import Link from "next/link"
import styles from './usePages.module.scss'
import { useState } from "react"
import { ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function usePages() {
    const pages = (children: React.ReactNode[]) => {
        return (
            <>
                {children}
            </>
        )
    }
    const item = (pageName: string) => {
        return (
            <li className={styles.root__item} key={pageName}>
                <Link className={styles.root__link} href={`/dashboard/${pageName}`}>{pageName}</Link>
            </li>
        )
    }
    const accordion = (items: React.ReactNode[], name: string) => {
        const [activeIndex, setActiveIndex] = useState<string | null>(null);

        const toggleItem = (index: string) => {
            setActiveIndex(activeIndex === index ? null : index);
        };

        return (
            <li className={styles.root__item} key={name}>
                <div className={styles.root__list}>
                    <button
                        className={styles.root__button}
                        onClick={() => toggleItem(name)}
                        aria-expanded={activeIndex === name}
                    >
                        <p>{name}</p>
                        <span className={`${styles.root__icon} ${activeIndex === name ? styles.root__iconRotate : ''}`}>
                            <ChevronRight/>
                        </span>
                    </button>
                    <AnimatePresence>
                        {activeIndex === name && (
                            <ul className={`${styles.root__accordionList}`}>
                                {items.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {item}
                                    </motion.div>
                                ))}
                            </ul>
                        )}
                    </AnimatePresence>
                </div>
            </li>
        )
    }
    return ({ item, accordion, pages })
}