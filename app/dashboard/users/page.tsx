'use client'

import Section from "@/lib/components/_dashboard/components/Section"
import styles from './page.module.scss'
import TableBuilder from "./components/TableBuilder"
import { AnimatePresence, motion } from "framer-motion"

export default function Page() {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                style={{ height: '100%' }}
            >
                <div className={styles.root}>
                    <Section>
                        <TableBuilder />
                    </Section>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}