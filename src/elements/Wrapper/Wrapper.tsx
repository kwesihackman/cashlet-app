import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Spacing, Colors } from '../../../utils/Styles'

interface Props {
    children: React.ReactNode
}

const Wrapper = ({ children }: Props) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

export default Wrapper

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: Spacing.general * 2,
        backgroundColor: Colors.cloud,
        borderTopRightRadius: Spacing.general * 2,
        borderTopLeftRadius: Spacing.general * 2
    }
})
