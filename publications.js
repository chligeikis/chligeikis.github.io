publications = {
    "In Review": {
        "w1":{
            "title": "On the Feasibility of Self-Powered Linear Feedback Control",
            "authors": "<b>C. Ligeikis</b> and J. Scruggs",
            "conference": "IEEE TAC",
            "conferencelong": "IEEE Transactions on Automatic Control (TAC)",
            "date": "",
            "status": "in review",
            "pdfFile": "",
            "url": "",
            "abstract": "A control system is called self-powered if the only energy it requires for operation is that which it absorbs from the plant. For a linear feedback law to be feasible for a self-powered control system, its feedback signal must be colocated with the control inputs, and its input-output mapping must satisfy an associated passivity constraint. The imposition of such a feedback law can be viewed equivalently as the imposition of a linear passive shunt admittance at the actuation ports of the plant. In this paper we consider the use of actively-controlled electronics to impose a self-powered linear feedback law. To be feasible, it is insufficient that the imposed admittance be passive, because parasitic losses must additionally be overcome. We derive sufficient feasibility conditions which explicitly account for these losses. In the finite-dimensional, time-invariant case, the feasibility condition distills to a more conservative version of the Positive Real Lemma, which is parametrized by various loss parameters. Three examples are given, in which this condition is used to determine the least-efficient loss parameters necessary to realize a desired feedback law."
        }
    },
    "Journal Articles": {
	 "j3":{
            "title": "Training of a classifier for structural component failure based on hybrid simulation and kriging",
            "authors": "G. Abbiati, S. Marelli, <b>C. Ligeikis </b>, R. Christenson, and B. Stojadinovic",
            "conference": "J Eng Mech",
            "conferencelong": "Journal of Engineering Mechanics",
            "date": "2022",
            "status": "",
            "pdfFile": "",
            "url": "https://doi.org/10.1061/(ASCE)EM.1943-7889.0002048",
            "abstract": "Hybrid simulation is a tool for investigating the dynamic response of a structural prototype subjected to realistic loading. Hybrid simulation is conducted using a hybrid model that combines physical and numerical substructures interacting with each other in a feedback loop. As a result, the tested substructure interacts with a realistic assembly subjected to a credible loading scenario. In the current practice, experimental results obtained via hybrid simulation support conceptualization and calibration of computational models for structural analysis. Instead, this paper extends the scope of hybrid simulation in constructing a safe/failure state classifier for the tested substructure by adaptively designing a sequence of parametrized hybrid simulations. Such a classifier is intended to compute the state of any physical-substructure-like component within system-level numerical simulations. It follows that the main contribution of this paper lies in the way experimental results are aggregated and integrated with structural analysis. The proposed procedure is experimentally validated for a three-degrees-of-freedom hybrid model subjected to Euler buckling."
        },
        "j2":{
            "title": "Identifying stochastic frequency response functions using real-time hybrid substructuring, principal component analysis, and kriging metamodeling",
            "authors": "<b>C. Ligeikis</b> and R. Christenson",
            "conference": "Exp Tech",
            "conferencelong": "Experimental Techniques",
            "date": "2020",
            "status": "",
            "pdfFile": "",
            "url": "https://doi.org/10.1007/s40799-020-00389-2",
            "abstract": "Real-time hybrid substructuring (RTHS) has previously been shown to be an effective tool to quantify the effect of parametric uncertainties on the response of a structural system. Proposed and implemented in this paper is a method that combines RTHS, Principal Component Analysis, and Kriging to metamodel the frequency response functions of a structure. The proposed method can be used to account for parametric variation in both the numerical and physical substructures. This approach is demonstrated using a series of bench-scale RTHS tests of a magnetorheological (MR) fluid damper used to control a 2 degree-of-freedom mass-spring system. The numerical system spring stiffnesses and the physical current supplied to the MR damper are each treated as uniformly distributed random variables. The RTHS test data is used to train computationally fast metamodels, which can then be used to conduct Monte Carlo simulations to determine distributions of the system response. The proposed methodology is shown to be both efficient and accurate."
        },
        "j1":{
            "title": "Assessing structural reliability using real-time hybrid substructuring",
            "authors": "<b>C. Ligeikis</b> and R. Christenson",
            "conference": "Int J Lifecycle Perform Eng",
            "conferencelong": "International Journal of Lifecycle Performance Engineering",
            "date": "2020",
            "status": "published",
            "pdfFile": "",
            "url": "https://doi.org/10.1504/IJLCPE.2020.10031040",
            "abstract": "While numerical simulations can be used to predict the dynamic performance of structural systems, there are some instances where the dynamical behaviour and uncertainties of specific system components may be difficult to accurately model. In these instances, structural reliability assessments may be conducted by employing the cyber-physical real-time hybrid sub-structuring (RTHS) test method. In this approach, a numerical model of a larger structural system, incorporating uncertainty in specific parameters, is coupled with a physical test specimen of a system component to fully capture system-level dynamic interactions and facilitate uncertainty propagation. This paper specifically details a study performed to experimentally validate the previously proposed adaptive Kriging-Hybrid simulation (AK-HS) structural reliability method. The AK-HS method combines Kriging metamodeling, an adaptive learning algorithm, Monte Carlo simulation, and RTHS testing to iteratively estimate a structural system's probability of failure given random parameters in the numerical model. The method is validated with a series of bench-scale RTHS tests on a viscous damper connecting two adjacent 6-degree-of-freedom rigid body structures. The AK-HS method is shown to accurately predict probabilities of failure for systems with up to 24 random variables using a reasonable number of RTHS tests."
        }
    },
    "Peer-Reviewed Conference Articles":{
	"c1":{
            "title": "<i style=\"font-style: normal;\"> An LQG-Inspired Framework for Self-Powered Feedback Control </i>",
            "authors": "<b>C. Ligeikis</b> and J. Scruggs",
            "conference": "CDC 2022",
            "conferencelong": "IEEE Conference on Decision and Control (CDC)",
            "date": "2022",
            "status": "accepted",
            "pdfFile": "",
            "url": "",
            "abstract": "Self-powered systems are vibration control technologies that fully power their operation via the harvesting, storage, and reuse of energy from exogenous plant disturbances. This paper explores the feasibility and synthesis of colocated feedback control laws for self-powered systems. These control laws are realized through the use of switch-mode power electronics to simulate shunt admittances. The feasible domain of the resulting \"self-powered synthetic admittance\" (SPSA) controllers is more restrictive than classical feedback passivity, due to parasitic transmission and storage losses in the system. In this paper, we derive sufficient conditions for the feasibility of finite-dimensional, linear time-invariant SPSA controllers and present a sub-optimal synthesis procedure for their design. The proposed methodology is employed to design a controller to reduce the seismic response of a base-isolated civil structure."
        },
	"c2":{
            "title": "Discrete-time, performance-guaranteed control of vibratory systems with power directionality constraints",
            "authors": "<b>C. Ligeikis</b> and J. Scruggs",
            "conference": "ACC 2022",
            "conferencelong": "American Control Conference (ACC)",
            "date": "2022",
            "status": "in proceedings, presented",
            "pdfFile": "",
            "url": "https://ieeexplore.ieee.org/abstract/document/9867818",
            "abstract": "We consider the design of feedback controllers for physical systems in which the actuators are constrained, such that they cannot inject power into the plant. Such constraints are called power directionality constraints (PDCs), and control technologies exhibiting them arise in both vibration suppression and energy harvesting applications. We consider the case in which the plant is linear, disturbances are stochastic, the response is stationary, and the performance is assessed via a multi-objective linear-quadratic measure. For this case, we develop a control design technique which consists of two design stages. In the first stage, a time-invariant static linear feedback law is optimized for performance, while also adhering to the PDC. In the second stage, a nonlinear feedback law is designed which guarantees to improve upon the optimized performance obtained in the first design stage. This nonlinear controller requires a small-scale semidefinite program to be solved in real-time. To accommodate the finite computational time required with this online optimization, the control methodology is developed entirely in a discrete-time setting. The technique is illustrated on a numerical example pertaining to a structural control system for a seismically-excited building."
        },
	"c3":{
            "title": "Feasibility and synthesis of finite-dimensional, linear time-invariant synthetic admittances for self-powered systems",
            "authors": "<b>C. Ligeikis</b> and J. Scruggs",
            "conference": "CDC 2021",
            "conferencelong": "IEEE Conference on Decision and Control (CDC)",
            "date": "2021",
            "status": "in proceedings, presented",
            "pdfFile": "",
            "url": "https://ieeexplore.ieee.org/abstract/document/9683340",
            "abstract": "Self-powered systems are vibration control technologies that fully power their operation via the harvesting, storage, and reuse of energy from exogenous plant disturbances. This paper explores the feasibility and synthesis of colocated feedback control laws for self-powered systems. These control laws are realized through the use of switch-mode power electronics to simulate shunt admittances. The feasible domain of the resulting \"self-powered synthetic admittance\" (SPSA) controllers is more restrictive than classical feedback passivity, due to parasitic transmission and storage losses in the system. In this paper, we derive sufficient conditions for the feasibility of finite-dimensional, linear time-invariant SPSA controllers and present a sub-optimal synthesis procedure for their design. The proposed methodology is employed to design a controller to reduce the seismic response of a base-isolated civil structure."
        },
        "c4":{
            "title": "Nonlinear feedback controllers for self-powered systems with non-ideal energy storage subsystems",
            "authors": "<b>C. Ligeikis</b> and J. Scruggs",
            "conference": "ACC 2021",
            "conferencelong": "American Control Conference (ACC)",
            "date": "2021",
            "status": "in proceedings, presented",
            "pdfFile": "",
            "url": "https://ieeexplore.ieee.org/abstract/document/9483323",
            "abstract": "A self-powered system is a control actuation technology that derives all energy to power its operations, from the dynamic response of the plant in which it is embedded. In order to maintain persistent operation, it must not exhaust its rechargeable energy storage subsystem. If the technology were perfectly efficient, this constraint would require that feasible feedback laws be passive. In the non-ideal case the constraint is more restrictive than mere passivity, because it must account for dissipations in the transduction network. One of the most significant factors limiting overall efficiency is the dissipation incurred when power is transmitted to or from storage. In the presence of these losses, the domain of feasible control laws includes a sub-domain of static colocated feedback laws, for which a certain static constraint holds for the feedback gain matrix. To obtain superior performance, this static feedback gain can be adapted in real-time, based on feedback measurements. This paper presents a nonlinear control design technique that accomplishes this adaptation while also guaranteeing feasibility. Although sub-optimal, the technique is guaranteed to improve upon the performance of the optimized static gain. The methodology is demonstrated in a simulation example pertaining to the self-powered control of a five-story civil structure subjected to seismic excitation."
        }
    }
}
