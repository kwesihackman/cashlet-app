import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors, FontSize, Spacing } from '../../../utils/Styles'

interface ITagProps {
    title: string
}

const Tag = ({ title }: ITagProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{title}</Text>
        </View>
    )
}

export default Tag

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Spacing.general
    },
    titleText: {
        color: Colors.white,
        paddingVertical: Spacing.general / 2,
        paddingHorizontal: Spacing.general,
        fontSize: FontSize.footNote
    }
})
