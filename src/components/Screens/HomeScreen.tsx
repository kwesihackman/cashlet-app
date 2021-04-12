import React, { useState } from 'react'
import { StyleSheet, View, } from 'react-native'
import { AnimatePresence } from 'moti'
import { Colors, Sizing, Spacing } from '../../../utils/Styles'
import Toast from '../../elements/Toast/Toast'
import Header from '../../elements/Header/Header'
import Wrapper from '../../elements/Wrapper/Wrapper'
import Goals from '../../elements/GoalList/Goals'
import Button from '../../elements/Button/Button'




const HomeScreen = () => {
    const [showSnackBar, setShowSnackBar] = useState(false)
    return (
        <View style={styles.container}>
            <AnimatePresence>
                {showSnackBar && <Toast handleClose={() => setShowSnackBar(false)} />}
            </AnimatePresence>
            <Header currency="KES" totalFunds={'42,000'} username="Jo" />
            <Wrapper>
                <Goals />
                <Button title="Show Snackbar" handleAction={() => setShowSnackBar(true)} />

            </Wrapper>

        </View>

    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        paddingTop: 44

    },
    buttonWrapper: {
        height: Sizing.buttonHeight,
        marginBottom: Spacing.general * 2,
        zIndex: 10,
        elevation: 10


    }
});
