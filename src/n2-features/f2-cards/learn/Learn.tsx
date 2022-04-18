import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../../../n1-main/m2-bll/store';
import {useNavigate, useParams} from 'react-router-dom';
import {CardType} from '../../../n1-main/m3-dal/m1-API/cardsAPI';
import SuperButton from '../../../n1-main/m1-ui/common/c2-SuperButton/SuperButton';
import {fetchCardsTC, InitialCardsStateType} from '../../../n1-main/m2-bll/b1-reducers/cardReducer';
import {AppStatusType} from '../../../n1-main/m2-bll/b1-reducers/appReducer';
import {PATH} from '../../../n1-main/m1-ui/routes/RoutesRoot';


const grades = ['не знал', 'забыл', 'долго думал', 'перепутал', 'знал'];

const getCard = (cards: CardType[]) => {
    const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
    const rand = Math.random() * sum;
    const res = cards.reduce((acc: { sum: number, id: number }, card, i) => {
            const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
            return {sum: newSum, id: newSum < rand ? i : acc.id}
        }
        , {sum: 0, id: -1});

    console.log('test: ', sum, rand, res)

    return cards[res.id + 1];
}

export const Learn = () => {
    const {cards} = useSelector<AppStoreType, InitialCardsStateType>((store) => store.cards);
    const packName = useSelector<AppStoreType, string>(state => state.packs.cardPacks.filter(pack => pack._id === packId)[0].name)
    const status = useSelector<AppStoreType, AppStatusType>(state => state.app.status)

    const {packId} = useParams<{ packId: string }>()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [first, setFirst] = useState<boolean>(true);
    const [card, setCard] = useState<CardType>({
        _id: '',
        cardsPack_id: '',
        answer: '',
        question: '',
        grade: 0,
        shots: 0,
        created: '',
        updated: '',
        user_id: '',
    });

    useEffect(() => {
        console.log('LearnContainer useEffect');

        if (first) {
            packId && dispatch(fetchCardsTC(packId))
            setFirst(false);
        }

        console.log('cards', cards)
        if (cards.length > 0) setCard(getCard(cards));

        return () => {
            console.log('LearnContainer useEffect off');
        }
    }, [dispatch, packId, cards, first]);

    const onNext = () => {
        setIsChecked(false);

        if (cards.length > 0) {
            setCard(getCard(cards));
        } else {

        }
    }

    const onClickCanselHandler = () => {
        navigate(PATH.PACKS, {replace: true})
    }

    return (
        <div>
            Learn {packName}

            <div>{card.question}</div>
            <div>
                <SuperButton onClick={() => setIsChecked(true)}>check</SuperButton>
            </div>

            {isChecked && (
                <>
                    <div>{card.answer}</div>

                    {grades.map((g, i) => (
                        <SuperButton key={'grade-' + i} onClick={() => {
                        }}>{g}</SuperButton>
                    ))}

                    <div><SuperButton onClick={onNext}>Next</SuperButton></div>
                    <div><SuperButton onClick={onClickCanselHandler}>Cansel</SuperButton></div>
                </>
            )}
        </div>
    );
};
