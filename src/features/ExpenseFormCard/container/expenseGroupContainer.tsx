import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import money from '../../../assets/images/hands.jpg';
import { v4 as uuidv4 } from 'uuid';

import { IGroup } from '../interface/expense.interface';

const Group: React.FC = () => {

  const [groups, setGroups] = useState<IGroup>({} as IGroup);
  const navigate = useNavigate();

  useEffect(() => {
    const storedGroups = localStorage.getItem('groups');
    if (storedGroups) {
      setGroups(JSON.parse(storedGroups));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('groups', JSON.stringify(groups));
  }, [groups]);

  useEffect(() => {
    const defaultGroupMembers = [
      { id: '1', name: 'Sapna' },
      { id: '2', name: 'Shruti' },
      { id: '3', name: 'Abhijeet' },
      { id: '4', name: 'Mahendra' },
      { id: '5', name: 'Yash' },
    ];
    const groupId = uuidv4();
    const groupName = 'Ghar Ke Log';
    const newGroup: IGroup = {
      id: groupId,
      name: groupName,
      members: defaultGroupMembers,
    };
    setGroups({ ...newGroup });
  }, []);

  return (
    <>
      <div className='container'>
        <p className='font-size--30 font--bold text--center mb--20'>Splitwise Application</p>
        <div className='flex justify-content--center'>
          <button onClick={(() => navigate('/expense', { state: { members: groups.members } }))} className='common-btn add-btn' type='submit'>Add Group</button>
        </div>
      </div>

      <div className="desc-color">
        <div className='flex '> <img src={money} className='money-img' />
          <h4 className='ml--40'>How do I use Splitwise?
          </h4></div>
        <ul>
          <li>
            First, sign up for an account!
          </li>
          <li>
            Next, create a group.  Groups are an easy way to split expenses with a particular group of people on an ongoing basis
          </li>
          <li>
            you'll be asked to provide contact information for the other members of the group. This allows all of those people to view the group on Splitwise, and to add expenses of their own.
          </li>
          <li>
            Once you've created your group, you and your friends can all start adding expenses! Go to your group, then hit the "Add bill" button. You'll be asked for various details about your expense, like the total cost, who paid, and how much each person should owe. You can include a picture or additional notes, or even change the date (for example, if you're adding an expense from last week). As soon as you hit "Save", Splitwise will update everyone's balances to keep track of how much each person owes.
          </li>
          <li>
            Later, after you've added a bunch of expenses, you'll probably want to settle up with your friends. Just hit the "Settle up" button to pay back your friend.
          </li>
        </ul>
      </div >
    </>
  );
};

export default Group;
