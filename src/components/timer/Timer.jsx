import { useState } from "react";
import { Modal } from "../modal/Modal";
import { Button } from "../ui/Button";

export function Timer(){
    const [isModal, setIsModal] = useState(false)

    return(
        <div>
            <Button
                children={"open modal"}
                onClick={() => setIsModal(true)}
            />
            <Modal
                isOpen={isModal}
                onClose={() => setIsModal(false)}
            >
                <div>
                    <p>
                        dasdad
                    </p>
                </div>
            </Modal>
        </div>
    )
}