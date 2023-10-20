import {
  ContactListStyle,
  BtnDelCont,
  ItemContLst,
} from './ContactList.styled';

export const ContactList = ({ isContacts, onRemoveContact }) => {
   return (
    <ContactListStyle>
      {isContacts.map(el => {
        return (
          <ItemContLst key={el.id}>
            <BtnDelCont type="button" onClick={() => onRemoveContact(el.id)}>
              del
            </BtnDelCont>
            {el.name} : {el.number}
          </ItemContLst>
        );
      })}
    </ContactListStyle>
  );
};
