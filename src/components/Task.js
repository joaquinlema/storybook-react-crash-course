import React from 'react';
import PropTypes from 'prop-types';

function Task({ task: { id, title, state }, onArchiveTask, onPinTask }) {
    return (
        <div className={`list-item ${state}`}>
            <label className="checkbox">
                <input
                    type="checkbox"
                    defaultChecked={state === 'TASK_ARCHIVED'}
                    disabled={true}
                    name="checked"
                />
                <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
            </label>
            <div className="title">
                <input type="text" value={state === 'TASK_PINNED' ? `${title} (pinned)` : title} readOnly={true} placeholder="Input title" />
            </div>

            <div className="actions" onClick={(event) => event.stopPropagation()}>
                {state !== 'TASK_ARCHIVED' && (
                    <a href='asd#' onClick={() => onPinTask(id)}>
                        <span className={`icon-star`} />
                    </a>
                )}
            </div>
        </div>
    );
}

Task.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
    }),
    onArchiveTask: PropTypes.func,
    onPinTask: PropTypes.func,
};

export default Task;