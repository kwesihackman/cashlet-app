import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Pressable, Alert } from 'react-native'
import { View as AnimatedView } from 'moti'
import { Ionicons } from '@expo/vector-icons'
import { Colors, Spacing } from '../../../utils/Styles'
import { StaticText } from '../../../utils/Constants'


interface Props {
    handleClose: () => void
}

const Toast = ({ handleClose }: Props) => {
    const [toastText, setToastText] = useState(StaticText.toastFullText)

    useEffect(() => {
        const timer = setTimeout(() => {
            handleClose()
        }, 10000)
        return () => {
            clearTimeout(timer)
        }
    }, [])


    return (
        <AnimatedView
            from={{
                translateY: -50,
                opacity: 0,

            }}
            animate={{
                translateY: 44,
                opacity: 1,
            }}
            exit={{
                translateY: -50,
                opacity: 0
            }}
            style={styles.container}>
            <Text style={styles.title} onPress={() => setToastText(StaticText.toastShotText)}>
                {toastText}
            </Text>
            <Pressable style={styles.IconView} onPress={handleClose}>
                <Ionicons name="close" size={32} color={Colors.white} />
            </Pressable>
        </AnimatedView >
    )
}

export default Toast

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.danger,
        padding: Spacing.general * 2,
        borderRadius: Spacing.general,
        flexDirection: 'row',
        display: 'flex',
        height: 'auto',
        position: 'absolute',
        left: 10,
        right: 10,
        zIndex: 999,
    },
    IconView: {
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        height: '100%',
    },
    title: {
        flex: 1,
        color: Colors.white,
        justifyContent: 'center',
        alignSelf: 'center'
    }

})
