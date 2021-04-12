import React from 'react'
import { StyleSheet, Text, Pressable } from 'react-native'
import { Colors, FontSize, Sizing, Spacing } from '../../../utils/Styles'

interface IButtonProps {
    title: string
    handleAction: () => void
}

const Button = ({ title, handleAction }: IButtonProps) => {
    return (
        <Pressable style={styles.container} onPress={handleAction}>
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.green,
        height: Sizing.buttonHeight,
        borderRadius: Sizing.buttonHeight / 2,
        marginBottom: Spacing.general * 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
    title: {
        color: Colors.white,
        fontSize: FontSize.SectionTitle
    }
})
